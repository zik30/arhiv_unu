import React, { type FC } from 'react';
import styles from './ChatPage.module.scss';
import { ChatMain } from 'widgets/chatMain/ChatMain';
import { ChatSidebar } from 'widgets/chatSidebar/ChatSidebar';

export const ChatPage: FC = () => {
  return (
    <div className={styles.chatPage}>
      <div className={styles.sidebar}>
        <ChatSidebar />
      </div>

      <div className={styles.mainContent}>
        <ChatMain />
      </div>
    </div>
  );
};
