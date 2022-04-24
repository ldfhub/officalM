import React, { FC, ReactElement } from 'react';
import styles from './index.less';

interface IProps {
  info: any;
}
const CustomList: FC<IProps> = (props): ReactElement => {
  const { info } = props;
  return (
    <div className={styles.customList}>
      <div className={styles.L}>
        <div className={styles.content}>{info?.content}</div>
        <div className={styles.date}>收藏时间:2022年2月12号</div>
      </div>
      <div className={styles.detail}>详情</div>
    </div>
  );
};
export default CustomList;
