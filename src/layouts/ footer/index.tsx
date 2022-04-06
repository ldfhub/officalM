import React, {useState} from 'react'
import styles from './index.less';
import imgUrl from '../../assets/home.png';

const FooterNav = () => {
  const nav = [
    {text: '首页', key: 'home', active: true},
    {text: '列表', key: 'list', active: false},
    {text: '上传', key: 'upload', active: false},
    {text: '我的', key: 'profile', active: false}
  ]
  const [navData, setNavData] = useState(nav);
  const clickChangeRouter = (key: string) => {
    return () => {
      const num = navData.findIndex(item => item.key === key);
      navData.forEach((item, index) => {
        item.active = false;
        navData[num].active = true;
      })
      setNavData([...navData]);
    }
  }
  return (
    <div className={styles.footerNav}>
      <ul>
        {
          navData.map((item, index) => {
            return (
              <li key={item.key} onClick={clickChangeRouter(item.key)}>
                <img src={require(`../../assets/${item.active ? item.key + '-active' : item.key}.png`)} />
                <span>{item.text}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default FooterNav;

