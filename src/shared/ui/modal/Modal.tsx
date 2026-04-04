import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import type { FC, ReactNode } from 'react';

interface IModal {
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<IModal> = ({ onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return createPortal(
    <div className={styles.wrapperModal} onClick={handleClickOutside}>
      <div className={styles.inner}>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>,
    document.getElementById('root')!,
  );
};
