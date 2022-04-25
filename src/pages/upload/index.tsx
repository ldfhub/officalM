import React from 'react';
import Cookies from 'js-cookie';
import { Button, Space, Swiper, Toast } from 'antd-mobile';
import styles from './index.less';
import { useHistory } from 'react-router';

export default function Upload() {
  const history = useHistory();
  const isCookies = Cookies.get('access_token');
  const skipLogin = () => {
    history.push('/login');
  };
  return (
    <div className={styles.upload}>
      {isCookies ? (
        <span>这是登录页面</span>
      ) : (
        <Button color="primary" onClick={skipLogin}>
          登录
        </Button>
      )}
    </div>
  );
}
