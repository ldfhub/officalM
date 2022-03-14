import React, { FC, ReactElement, useState, useRef, useEffect} from 'react';
import copy from "copy-to-clipboard";
import styles from './index.less';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {
  info: {content: string; id: string; type: string; collect: string; easyLike:string;}
}

const CustomTable: FC<IProps> = (props):ReactElement => {
  const { info } = props;
  const timeId = useRef();
  const [isRoute, setIsRoute] = useState(false);
  const dispatch = useDispatch();
  const queryHomeOneList = () => {
    dispatch({
      type: 'home/queryHomeOne',
      payload: {type: info.type}
    })
  }
  const clickRoute = () => {
    timeId.current = setTimeout(() => {
      queryHomeOneList();
    }, 1000)
  }
  // const copyText = (textToCopy) => {
  //   return () => {
  //   }
  // }
  const title = ():string => {
    switch (info.type) {
      case 'JOKE':
        return '笑话'
      case 'LOVEWORDS':
        return '情话'
      case 'HOTWORDS':
        return '网易云热评'
      case 'WISDOM':
        return '励志'
      default:
        return ''
    }
  }
  return (
    <div className={styles.customTable}>
      {/* <div className={styles.thumbnail}></div> */}
      <div className={styles.contentInfo}>
        <span className={styles.textContent}>
          {info?.content}<i onClick={clickRoute} style={{ fontStyle: 'normal', color: '#666' }}>#{title()}</i>
        </span>
        {/* <div className={styles.btnInfo}>
          <div className={styles.btnInfo_l}>
            <div className='mgl10 at-icon at-icon-heart'>({Number(info.easyLike)})</div>
            <div className='mgl10 at-icon at-icon-star'>({Number(info.collect)})</div>
            <span className='mgl10' onClick={copyText(info.content)}>复制文字</span>
          </div>
          <div className={styles.btnInfo_r}>
            <div className={isRoute ? styles.route + ' ' + styles.refresh : styles.refresh} onClick={clickRoute}></div>
            <span className='mgl10 mgr10'>详情</span>
          </div>
        </div> */}
      </div>
    </div>
  )
}
export default CustomTable

