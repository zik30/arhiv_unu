import type { FC } from 'react';
import styles from './ChatSidebar.module.scss';
import { Button } from 'shared/ui/button/Button';
import { Typography } from 'shared/ui/typography/Typography';
import { useTranslation } from 'react-i18next';

const chats = [
  {
    id: '1',
    title: 'Trip to Bishkek',
    lastMessage: 'What are the best restaurants?',
  },
  {
    id: '2',
    title: 'Mountain hiking',
    lastMessage: 'Routes in Ala-Archa',
  },
  {
    id: '3',
    title: 'Cultural tour',
    lastMessage: 'Best museums in Osh?',
  },
  {
    id: '4',
    title: 'Lake Issyk-Kul',
    lastMessage: 'What activities are available?',
  },
  {
    id: '5',
    title: 'Historical sites',
    lastMessage: 'Any recommendations in the south?',
  },
];

export const ChatSidebar: FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.chatSidebar}>
      <div className={styles.top}>
        <Button variant='nav' fullWidth>
          {t('btns.newChat')}
        </Button>
      </div>
      <div className={styles.middle}>
        <Typography align='center' variant='bodyText2' color='grey03'>
          {t('titles.yourChats')}
        </Typography>
        <div className={styles.chatList}>
          {chats.map((chat) => (
            <div key={chat.id} className={styles.chatItem}>
              <Typography variant='bodyText2' color='white'>
                {chat.title}
              </Typography>
              <Typography truncate={24} variant='bodyText2' color='grey03'>
                {chat.lastMessage}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
