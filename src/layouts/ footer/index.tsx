import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { useHistory } from 'react-router-dom';

const FooterNav = () => {
  const history = useHistory();
  const nav = [
    { text: '首页', key: 'home', active: true },
    { text: '列表', key: 'list', active: false },
    { text: '上传', key: 'upload', active: false },
    { text: '我的', key: 'profile', active: false },
  ];
  console.log(history);
  const [navData, setNavData] = useState(nav);

  useEffect(() => {
    initRouter();
  }, []);

  const pathName: string = history.location.pathname;
  const initRouter = () => {
    const num = navData.findIndex((item) => '/' + item.key === pathName);
    navData.forEach((item, index) => {
      item.active = false;
      navData[num].active = true;
    });
    setNavData([...navData]);
  };
  // 点击切换路由
  const clickChangeRouter = (key: string) => {
    return () => {
      const num = navData.findIndex((item) => item.key === key);
      navData.forEach((item, index) => {
        item.active = false;
        navData[num].active = true;
      });
      setNavData([...navData]);
      history.push(`/${key}`);
    };
  };
  return (
    <div className={styles.footerNav}>
      <ul>
        {navData.map((item, index) => {
          return (
            <li key={item.key} onClick={clickChangeRouter(item.key)}>
              <img
                src={require(`../../assets/${
                  item.active ? item.key + '-active' : item.key
                }.png`)}
              />
              <span className={item.active ? styles.activeText : ''}>
                {item.text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FooterNav;
