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
  type?: 'button' | 'submit' | 'reset';
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
  type = 'button',
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
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {isTextChild ? (
        <Typography align='center' variant='bodyText' weight='semiBold'>
          {children}
        </Typography>
      ) : (
        children
      )}
      {icon}
    </button>
  );
};
