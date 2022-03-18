import React, { FC, useEffect, useState, useRef } from 'react';
import { IHomeProps } from './index.interface';
import styles from './index.less';
import { useSelector, useDispatch } from 'react-redux';
import { downloadImg } from '@/utils/utils';
import CustomTable from './component/customTable';
import { RootState } from '../../models/storeState';

const Home:FC<IHomeProps> = () => {
  const [isRoute, setIsRoute] = useState(false);
  const domNode = useRef();
  const timeId = useRef();
  const dispatch = useDispatch();
  const { list } = useSelector((state:RootState) => {
    return state.home
  })

  useEffect(() => {
    queryAllHomelist();
  }, [])
  const queryAllHomelist = () => {
    dispatch({
      type: 'home/getHomeList',
      payload: {}
    })
  }

  // 点击刷新
  const clickRoute = () => {
    // clearTimeout(timeId.current);
    setIsRoute(true)
    timeId.current = setTimeout(() => {
      queryAllHomelist();
      setIsRoute(false);
    }, 1000)
  }
  // 保存图片
  const saveImage = () => {
    const dom = document.getElementById('domNode');
        const fileName = new Date().getTime() + '文案.png';
        downloadImg(dom, fileName, 2);
    console.log('00000')
  }
  return (
    <div className={styles.home} id='domNode'>
      <div className={styles.banner}></div>
      <div className={styles.middleTitle}>
        <span>今日分享</span>
        <div style={{ display: 'flex' }}>
          <div onClick={saveImage}>一键保存图片</div>
          <div className={isRoute ? styles.route + ' ' + styles.refresh : styles.refresh} onClick={clickRoute}></div>
        </div>
      </div>
      <div className={styles.homeBottom}>
        {
          list.map((item:any, index:number) => {
            return (
              <CustomTable key={index} info={item} />
            )
          })
        }
      </div>
    </div>
  );
}

export default Home;
