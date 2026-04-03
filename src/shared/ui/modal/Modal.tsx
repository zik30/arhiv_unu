import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';

interface IModal {
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<IModal> = ({ onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
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
    <div className={styles.wrapper} onClick={handleClickOutside}>
      <div className={isClosing ? styles.innerClosing : styles.inner}>
        <button className={styles.closeBtn} onClick={handleClose}>
          ✕
        </button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>,
    document.getElementById('root')!,
  );
};
