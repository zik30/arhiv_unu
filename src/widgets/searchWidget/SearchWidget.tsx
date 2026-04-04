import React, { useState, type FC } from 'react';
import styles from './SearchWidget.module.scss';
import { Container } from 'shared/ui/container/Container';
import { Typography } from 'shared/ui/typography/Typography';
import { CustomInput } from 'shared/ui/input/Input';
import { Button } from 'shared/ui/button/Button';
import { Filter } from 'components/filter/Filter';
import { useTranslation } from 'react-i18next';

export const SearchWidget: FC = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const { t } = useTranslation();
  return (
    <section className={styles.searchWidget}>
      <Container className={styles.container}>
        <Typography variant='h2' align='center'>
          Галерея
        </Typography>
        <div className={styles.searchContainer}>
          <CustomInput
            placeholder={t('placeholders.search')}
            type='search'
            fullWidth={true}
          />
          <Button
            onClick={() => setOpenFilter(!openFilter)}
            className={styles.btn}
          >
            Фильтр
          </Button>
        </div>
        <Filter
          className={openFilter ? styles.openFilter : ''}
          onApply={() => setOpenFilter(false)}
          onClear={() => setOpenFilter(false)}
        />
      </Container>
    </section>
  );
};
