import type { FC } from 'react';
import styles from './HeroWidget.module.scss';
import { Typography } from 'shared/ui/typography/Typography';
import { Button } from 'shared/ui/button/Button';
import { CustomInput } from 'shared/ui/input/Input';
import { useTranslation } from 'react-i18next';

export const HeroWidget: FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <Typography align='center' variant='h1' color='white'>
          {t('titles.mainPage')}
        </Typography>
        <Typography align='center' variant='bodyText' color='white'>
          {t('titles.mainPageSubtitle')}
        </Typography>

        <div className={styles.searchContainer}>
          <CustomInput
            type='search'
            placeholder={t('placeholders.searchHistory')}
            fullWidth
            className={styles.searchInput}
          />
          <Button variant='primary' className={styles.searchButton}>
            {t('btns.search')}
          </Button>
        </div>
      </div>
    </section>
  );
};
