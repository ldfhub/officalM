import React from 'react';
import Cookies from 'js-cookie';
import { Button, Space, Swiper, Toast } from 'antd-mobile';
import styles from './index.less';

export default function Upload() {
  const isCookies = Cookies.get('access_token');
  return (
    <div className={styles.upload}>
      {isCookies ? (
        <span>这是登录页面</span>
      ) : (
        <Button color="primary">登录</Button>
      )}
    </div>
  );
}
