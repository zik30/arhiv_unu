import React, { type FC } from 'react';
import styles from './SearchWidget.module.scss';
import { Container } from 'shared/ui/container/Container';
import { Typography } from 'shared/ui/typography/Typography';
import { CustomInput } from 'shared/ui/input/Input';
import { Button } from 'shared/ui/button/Button';

export const SearchWidget: FC = () => {
  return (
    <section className={styles.searchWidget}>
      <Container className={styles.container}>
        <Typography variant='h2' align='center'>
          Галерея
        </Typography>
        <div className={styles.searchContainer}>
          <CustomInput placeholder='Поиск...' type='search' fullWidth={true} />
          <Button className={styles.btn}>Фильтр</Button>
        </div>
      </Container>
    </section>
  );
};
