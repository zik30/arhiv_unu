import { Typography } from 'shared/ui/typography/Typography';
import styles from './Survey.module.scss';
import { useState, type FC } from 'react';
import { Container } from 'shared/ui/container/Container';
import { CustomInput } from 'shared/ui/input/Input';
import { Button } from 'shared/ui/button/Button';
import { Modal } from 'shared/ui/modal/Modal';
import { UploadModal } from 'components/uploadModal/UploadModal';

export const Survey: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className={styles.survey}>
        <Container>
          <Typography variant='h2' align='center' className={styles.title}>
            Анкета карточки
          </Typography>
          <Typography
            variant='bodyText'
            align='center'
            className={styles.description}
          >
            Поделитесь историей, которую знаете!
          </Typography>
          <Button className={styles.btn} onClick={() => setIsOpen(true)}>
            Загрузить через документ
          </Button>
          <div className={styles.formSection}>
            <div className={styles.field}>
              <Typography variant='bodyText' className={styles.label}>
                ФИО
              </Typography>
              <CustomInput fullWidth placeholder='Введите полное имя' />
            </div>

            <div className={styles.field}>
              <Typography variant='bodyText' className={styles.label}>
                Дата рождения
              </Typography>
              <CustomInput type='date' fullWidth />
            </div>

            <div className={styles.field}>
              <Typography variant='bodyText' className={styles.label}>
                Дата смерти
              </Typography>
              <CustomInput type='date' fullWidth />
            </div>

            <div className={styles.field}>
              <Typography variant='bodyText' className={styles.label}>
                Регион рождения
              </Typography>
              <CustomInput fullWidth placeholder='Введите регион' />
            </div>

            <div className={styles.field}>
              <Typography variant='bodyText' className={styles.label}>
                Село/Город рождения
              </Typography>
              <CustomInput fullWidth placeholder='Введите село или город' />
            </div>

            <div className={styles.field}>
              <Typography variant='bodyText' className={styles.label}>
                Оккупация
              </Typography>
              <CustomInput
                fullWidth
                placeholder='Введите профессию или занятие'
              />
            </div>

            <div className={styles.field}>
              <Typography variant='bodyText' className={styles.label}>
                В чем был обвинен
              </Typography>
              <CustomInput fullWidth placeholder='Опишите обвинение' />
            </div>

            <div className={styles.field}>
              <Typography variant='bodyText' className={styles.label}>
                Когда его обвинили
              </Typography>
              <CustomInput type='date' fullWidth />
            </div>

            <div className={styles.field}>
              <Typography variant='bodyText' className={styles.label}>
                Куда его отправили
              </Typography>
              <CustomInput
                fullWidth
                placeholder='Место ссылки или заключения'
              />
            </div>

            <div className={styles.field}>
              <Typography variant='bodyText' className={styles.label}>
                Когда его отправили
              </Typography>
              <CustomInput type='date' fullWidth />
            </div>

            <div className={styles.field}>
              <Typography variant='bodyText' className={styles.label}>
                Биография
              </Typography>
              <textarea
                className={styles.textarea}
                placeholder='Расскажите историю жизни'
                rows={6}
              />
            </div>

            <div className={styles.field}>
              <Typography variant='bodyText' className={styles.label}>
                Откуда эта информация
              </Typography>
              <CustomInput fullWidth placeholder='Источник информации' />
            </div>
          </div>
        </Container>
      </section>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <UploadModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onUpload={(files) => {
              console.log('Uploaded files:', files);
              // TODO: process uploaded files
            }}
          />
        </Modal>
      )}
    </>
  );
};
