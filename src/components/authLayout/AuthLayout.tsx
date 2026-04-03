import React, { type FC } from 'react';
import styles from './AuthLayout.module.scss';
import { Outlet } from 'react-router-dom';

export const AuthLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Outlet />
      </div>
      <div className={styles.image}></div>
    </div>
  );
};
