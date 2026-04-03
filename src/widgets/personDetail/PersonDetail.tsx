import React, { type FC } from 'react';
import styles from './PersonDetail.module.scss';
import { Container } from 'shared/ui/container/Container';
import { Typography } from 'shared/ui/typography/Typography';

export const PersonDetail: FC = () => {
  return (
    <section className={styles.personDetailSection}>
      <Container>
        <Typography align='center' variant='h2' transform='uppercase'>
          Чынгыз Айтматов
        </Typography>
        <Typography align='center' variant='h3' color='grey02'>
          1900 ~ 1990
        </Typography>
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/5/5e/Tschingis_Ajtmatow.jpg'
              alt=''
            />
          </div>
          <div className={styles.info}>
            <Typography variant='bodyText'>
              <b>Место рождения:</b> 1940
            </Typography>
            <Typography variant='bodyText'>
              <b>Родился:</b> 1940
            </Typography>
            <Typography variant='bodyText'>
              <b>Родился:</b> 1940
            </Typography>
            <Typography variant='bodyText'>
              <b>Родился:</b> 1940
            </Typography>
            <Typography variant='bodyText'>
              <b>Родился:</b> 1940
            </Typography>

            <Typography variant='bodyText'>
              <b>Биография:</b>
              <br />
              Чынгыз Айтматов - известный киргизский писатель и поэт, один из
              самых значимых деятелей культуры Средней Азии. Родился в 1940 году
              в селе Кыргызстан. Его творчество охватывает широкий спектр тем,
              включая социальные, философские и культурные вопросы. Айтматов
              известен своими произведениями, такими как "Плаха", "Белый
              пароход" и "Голос предков". Его работы часто исследуют темы
              человеческой природы, судьбы и связи между людьми и природой.
              Чынгыз Айтматов оставил глубокий след в литературе и культуре
              Киргизии и всего мира.
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};
