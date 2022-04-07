import React from 'react';
import styles from './index.less';

export default function Header(props:any) {
  const { title } = props;
  return (
    <div className={styles.header}>{title}</div>
  )
}

