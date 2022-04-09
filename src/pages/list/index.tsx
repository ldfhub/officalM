import React, { useState, useEffect, useRef } from 'react';
import { listNav } from '@/utils/data';
import BScroll from 'better-scroll';
import styles from './index.less';
import { betterScroll } from '@/utils/utils';

export default function List() {
  const [bs, setBs] = useState<any>();
  const [listNavActive, setListNavActive] = useState('ALL');
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (wrapperRef.current) {
      const bScroll = betterScroll(wrapperRef.current, {
        // probeType: 3,
        scrollX: true, //开启横向滚动
        mouseWheel: true, // 鼠标滚轮
        click: true, // better-scroll 默认会阻止浏览器的原生 click 事件
        scrollY: false, //关闭竖向滚动
      });
      setBs(bScroll);
    }
  }, []);
  const activeLiType = (item: any) => {
    setListNavActive(item.id);
  };
  return (
    <div className={styles.list}>
      <div className={styles.listWrapper} ref={wrapperRef} id="wrapper">
        <ul
          className={styles.content}
          style={{ width: `${64 * listNav.length}px` }}
        >
          {listNav.map((item, index) => {
            return (
              <li
                onClick={() => activeLiType(item)}
                className={listNavActive === item.id ? styles.active : ''}
                key={item.id}
              >
                {item.type}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
