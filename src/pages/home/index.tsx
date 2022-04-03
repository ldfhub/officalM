import React, { FC, useEffect, useState, useRef } from 'react';
import { IHomeProps, IList } from './index.interface';
import styles from './index.less';
import { Button, Space, Swiper, Toast } from 'antd-mobile'
import dayjs from 'dayjs'
// import { bannerData } from '@/utils/data';
import { useSelector, useDispatch } from 'react-redux';
import { downloadImg } from '@/utils/utils';
import CustomTable from './component/customTable';
import { RootState } from '../../models/storeState';

const Home:FC<IHomeProps> = () => {
  const [isRoute, setIsRoute] = useState(false);
  const [isShow, setIsshow] = useState(true);
  const domNode = useRef();
  const timeId = useRef();
  const dispatch = useDispatch();
  const { list } = useSelector((state:RootState) => {
    return state.home
  })
  const SwiperItem = Swiper.Item;
  const weekNum = dayjs().day();
  const newList = list.filter((item:IList, index) => {
    if(weekNum === 1 || weekNum === 2) {
      return item.type === 'WISDOM'
    } else if (weekNum === 3 || weekNum === 4) {
      return item.type === 'HOTWORDS'
    } else if (weekNum === 5 || weekNum === 6) {
      return item.type === 'LOVEWORDS'
    } else if (weekNum === 0) {
      return item.type === 'JOKE'
    }
  })

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

  // // 点击刷新
  // const clickRoute = () => {
  //   // clearTimeout(timeId.current);
  //   setIsRoute(true)
  //   timeId.current = setTimeout(() => {
  //     queryAllHomelist();
  //     setIsRoute(false);
  //   }, 1000)
  // }
  // 保存图片
  const saveImage = async() => {
    await setIsshow(false)
    const dom = document.getElementById('domNode');
    const fileName = new Date().getTime() + '文案.png';
    downloadImg(dom, fileName, 2);
    await setIsshow(true)
  }
  return (
    <div className={styles.home} id='domNode'>
      <div className={styles.engTitle}>Daily Sharing</div>
      <div className={styles.banner}>
        {/* <Swiper>
          {swiperItems}
        </Swiper> */}
        <div className={styles.bannerContent}>
          <div className={styles.quotationMark}>“</div>
            白天积极向上，<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夜晚灵魂安放
          <div className={styles.quotationMarkRight}>”</div>
        </div>
      </div>
      <div className={styles.middleTitle}>
        <span>今日分享</span>
        {
          isShow ?
            <button className={styles.btn} onClick={saveImage} style={{ cursor: 'pointer' }}>
              保存图片
            </button>
          : <span style={{ color: '#666', fontSize: '20px'}}>周日</span>
        }
      </div>
      <div className={styles.homeBottom}>
        {
          newList.map((item:any, index:number) => {
            return (
              <CustomTable isShow={isShow} key={index} info={item} />
            )
          })
        }
      </div>
    </div>
  );
}

export default Home;
