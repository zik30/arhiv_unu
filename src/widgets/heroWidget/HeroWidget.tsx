import type { FC } from 'react';
import styles from './HeroWidget.module.scss';
import { Typography } from 'shared/ui/typography/Typography';
import { Button } from 'shared/ui/button/Button';
import { CustomInput } from 'shared/ui/input/Input';

export const HeroWidget: FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <Typography align='center' variant='h1' color='white'>
          Исследуй архивы!
        </Typography>
        <Typography align='center' variant='bodyText' color='white'>
          Найди и прочитай истории известных людей Кыргызстана, которые
          вдохновляют и учат нас.
        </Typography>

        <div className={styles.searchContainer}>
          <CustomInput
            type='search'
            placeholder='Искать истории...'
            fullWidth
            className={styles.searchInput}
          />
          <Button variant='primary' className={styles.searchButton}>
            Поиск
          </Button>
        </div>
      </div>
    </section>
  );
};
