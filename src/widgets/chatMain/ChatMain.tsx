import type { FC } from 'react';
import styles from './ChatMain.module.scss';
import { Button } from 'shared/ui/button/Button';
import { CustomInput } from 'shared/ui/input/Input';
import { MessageCircle } from 'lucide-react';
import classNames from 'classnames';
import { Typography } from 'shared/ui/typography/Typography';

const mockMessages = [
  {
    id: '1',
    sender: 'user',
    content: 'Привет! Как дела?',
    timestamp: '10:00 AM',
  },
  {
    id: '2',
    sender: 'chat',
    content: 'Привет, все хорошо! А у тебя?',
    timestamp: '10:01 AM',
  },
  {
    id: '3',
    sender: 'user',
    content: 'Тоже отлично! Какие планы на сегодня?',
    timestamp: '10:02 AM',
  },
  {
    id: '4',
    sender: 'chat',
    content: 'Планирую прогуляться по парку и почитать книгу.',
    timestamp: '10:03 AM',
  },
  {
    id: '5',
    sender: 'user',
    content: 'Звучит здорово! Я тоже хочу провести день на свежем воздухе.',
    timestamp: '10:04 AM',
  },
  {
    id: '6',
    sender: 'chat',
    content: 'Отличная идея! Может, встретимся в парке в 2 часа?',
    timestamp: '10:05 AM',
  },
  {
    id: '7',
    sender: 'user',
    content: 'С удовольствием! До встречи в 2 часа!',
    timestamp: '10:06 AM',
  },
];

export const ChatMain: FC = () => {
  return (
    <section className={styles.chatMain}>
      <div className={styles.messagesContainer}>
        {mockMessages.map((message) => (
          <div
            key={message.id}
            className={classNames(styles.message, styles[message.sender])}
          >
            <Typography variant='bodyText' className={styles.content}>
              {message.content}
            </Typography>
            <Typography variant='bodyText' className={styles.timestamp}>
              {message.timestamp}
            </Typography>
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <CustomInput fullWidth placeholder='Введите сообщение...' />
        <Button>
          <MessageCircle />
        </Button>
      </div>
    </section>
  );
};
