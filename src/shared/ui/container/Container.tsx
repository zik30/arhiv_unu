import classNames from 'classnames';
import React, { type FC, type ReactNode } from 'react';
import styles from './Container.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={classNames(className, styles.container)}>{children}</div>
  );
};
