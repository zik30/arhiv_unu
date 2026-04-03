import styles from './Button.module.scss';
import { Typography } from '../typography/Typography';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined' | 'grey' | 'nav';
  size?: 'medium' | 'short' | 'long';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  fullWidth = false,
  icon,
  className = '',
}) => {
  const buttonClasses = classNames(
    styles.button,
    styles[variant],
    styles[size],
    !!icon && styles.container,
    fullWidth && styles.fullWidth,
    className,
  );
  const isTextChild =
    typeof children === 'string' || typeof children === 'number';
  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {isTextChild ? (
        <Typography variant='bodyText' weight='semiBold'>
          {children}
        </Typography>
      ) : (
        children
      )}
      {icon}
    </button>
  );
};
