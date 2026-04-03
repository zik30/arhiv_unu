import React, { type FC, useState } from 'react';
import styles from './ChatPage.module.scss';
import { Button } from 'shared/ui/button/Button';
import { CustomInput } from 'shared/ui/input/Input';
import { Typography } from 'shared/ui/typography/Typography';
import { MessageCircle } from 'lucide-react';
import { ChatSidebar } from 'widgets/chatSidebar/ChatSidebar';
import { ChatMain } from 'widgets/chatMain/ChatMain';

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
