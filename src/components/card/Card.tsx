import React, { type FC } from 'react';
import styles from './Card.module.scss';
import { Typography } from 'shared/ui/typography/Typography';
import { Button } from 'shared/ui/button/Button';
import { Link } from 'react-router-dom';

export const Card: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQLlH_RZ0SMydWsWYtNolU8_YuvtgyatQqA&s'
          alt=''
        />
      </div>
      <div className={styles.info}>
        <div className={styles.text}>
          <Typography variant='h3' weight='bold'>
            Jhon Doe
          </Typography>
          <Typography
            className={styles.years}
            variant='smallText'
            color='grey02'
          >
            1900 - 1962
          </Typography>
          <Typography variant='smallText' color='grey02' truncate={200}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </div>
        <Link to={'1'}>
          <Button fullWidth>Подробнее</Button>
        </Link>
      </div>
    </div>
  );
};
