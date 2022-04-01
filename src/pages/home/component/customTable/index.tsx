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
  const titleName = title();
  // 导入图片
  const imgUrl = require('../../../../assets/'+ titleName + '.png');
  return (
    <div className={styles.customTable}>
      <div className={styles.contentInfo} style={{backgroundImage: `url(${imgUrl})`}}>
        <div className={styles.btnInfo}>
          <div className={styles.titleNameType}>{`# ${titleName === '网易云热评' ? '热评' : titleName} #`}</div>
          <div className={styles.btnInfo_r}>
            <div className={isRoute ? styles.route + ' ' + styles.refresh : styles.refresh} onClick={clickRoute}></div>
            {/* <span className='mgl10 mgr10'>详情</span> */}
          </div>
        </div>
        <span className={styles.textContent}>
          <div className={styles.quotationMark}>“</div>
          {info?.content}
          <div className={styles.quotationMarkRight}>”</div>
          {/* <i onClick={clickRoute} style={{ fontStyle: 'normal', color: '#666' }}>#{title()}</i> */}
        </span>
      </div>
    </div>
  )
}
export default CustomTable
