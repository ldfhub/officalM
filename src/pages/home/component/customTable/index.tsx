import React, { FC, ReactElement, useState, useRef, useEffect} from 'react';
import copy from "copy-to-clipboard";
import styles from './index.less';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {
  info: {content: string; id: string; type: string; collect: string; easyLike:string; en: string;}
  isShow: boolean;
}

const CustomTable: FC<IProps> = (props):ReactElement => {
  const { info, isShow } = props;
  const timeId = useRef();
  const [isRoute, setIsRoute] = useState(false);
  const dispatch = useDispatch();
  // 适配文案大小
  const fitFont = [
    {lineHeight:20, fontSize:16},
    {lineHeight:30, fontSize:22}
  ]
  const queryHomeOneList = () => {
    dispatch({
      type: 'home/queryHomeOne',
      payload: {type: info.type}
    })
  }
  const clickRoute = () => {
    setIsRoute(true);
    timeId.current = setTimeout(() => {
      queryHomeOneList();
      setIsRoute(false);
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
  const contentStyle = info.content.length > 100 ? fitFont[0] : fitFont[1];
  // 导入图片
  const imgUrl = require('../../../../assets/'+ titleName + '.png');
  return (
    <div className={styles.customTable}>
      <div className={styles.contentInfo} style={{backgroundImage: `url(${imgUrl})`}}>
        <div className={styles.btnInfo}>
          <div className={styles.titleNameType}>{`# ${titleName === '网易云热评' ? '热评' : titleName} #`}</div>
          {
            isShow &&
            <div className={styles.btnInfo_r} onClick={clickRoute}>
              <div className={isRoute ? styles.route + ' ' + styles.refresh : styles.refresh}></div>
              <span>换一批</span>
            </div>
          }
        </div>
        <div className={styles.textContent} style={{ fontSize: contentStyle.fontSize + 'px', lineHeight: contentStyle.lineHeight + 'px'}}>
          <div className={styles.quotationMark}>“</div>
          {info?.content}
          {
            info.type === 'WISDOM' &&
            <div>{info.en}</div>
          }
          <div className={styles.quotationMarkRight}>”</div>
          {/* <i onClick={clickRoute} style={{ fontStyle: 'normal', color: '#666' }}>#{title()}</i> */}
        </div>
      </div>
    </div>
  )
}
export default CustomTable
