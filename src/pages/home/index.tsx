import React, { FC, useEffect, useState, useRef } from 'react';
import { IHomeProps } from './index.interface';
import styles from './index.less';
import { Button, Space, Swiper, Toast } from 'antd-mobile'
// import { bannerData } from '@/utils/data';
import { useSelector, useDispatch } from 'react-redux';
import { downloadImg } from '@/utils/utils';
import CustomTable from './component/customTable';
import img from '../../assets/情话.png';
import { RootState } from '../../models/storeState';

const Home:FC<IHomeProps> = () => {
  const [isRoute, setIsRoute] = useState(false);
  const domNode = useRef();
  const timeId = useRef();
  const dispatch = useDispatch();
  const { list } = useSelector((state:RootState) => {
    return state.home
  })
  const SwiperItem = Swiper.Item;

  // 轮播
  // const swiperItems = bannerData.map((item, index) => {
  //   return (
  //     <SwiperItem>
  //       <div>
  //         <img src={img} key={item.id} />
  //       </div>
  //     </SwiperItem>
  //   )
  // })

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
    console.log('222222222')
  }
  return (
    <div className={styles.home} id='domNode'>
      <div className={styles.engTitle}>Daily Sharing</div>
      <div className={styles.banner}>
        {/* <Swiper>
          {swiperItems}
        </Swiper> */}
      </div>
      <div className={styles.middleTitle}>
        <span>今日分享</span>
        <div style={{ display: 'flex' }}>
          {/* <div onClick={saveImage}>一键保存图片</div>
          <div className={isRoute ? styles.route + ' ' + styles.refresh : styles.refresh} onClick={clickRoute}></div> */}
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
