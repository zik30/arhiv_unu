import styles from './Input.module.scss';
import { Typography } from '../typography/Typography';
import {
  useRef,
  useState,
  type FC,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import classNames from 'classnames';
import { Eye, EyeClosed, X } from 'lucide-react';

export type InputProps = {
  fullWidth?: boolean;
  error?: boolean;
  icon?: ReactNode;
  type?: 'text' | 'checkbox' | 'range' | 'radio' | 'password' | 'search';
  helperText?: string;
  disabled?: boolean;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const CustomInput: FC<InputProps> = ({
  fullWidth = false,
  error = false,
  icon,
  type = 'text',
  helperText,
  disabled = false,
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputClasses = classNames(
    styles.input,
    fullWidth && styles.fullWidth,
    error && styles.error,
    icon ? styles.withIcon : '',
    type === 'password' && styles.password,
    type === 'search' && styles.search,
    disabled && styles.disabled,
    className,
  );

  const hasValue = !!props.value;

  const handleClear = () => {
    props.onChange?.({
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>);

    inputRef.current?.focus();
  };

  const renderRightIcon = () => {
    if (type === 'password') {
      return showPassword ? (
        <EyeClosed color='var(--grey02)' />
      ) : (
        <Eye color='var(--grey02)' />
      );
    }

    if (type === 'text' && hasValue) {
      return <X height={24} width={24} color='var(--grey02)' />;
    }

    return null;
  };

  return (
    <>
      <div
        className={classNames(styles.inputWrapper, {
          [styles.fullWidth]: fullWidth,
        })}
      >
        {icon && <div className={classNames(styles.inputIcon)}>{icon}</div>}
        {renderRightIcon() && (
          <div
            className={styles.right}
            onClick={
              type === 'password'
                ? () => setShowPassword(!showPassword)
                : handleClear
            }
          >
            {renderRightIcon()}
          </div>
        )}
        <input
          ref={inputRef}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          className={inputClasses}
          aria-invalid={error}
          {...props}
        ></input>
      </div>
      {helperText && (
        <Typography
          className={styles.helperText}
          variant='smallText'
          color='grey03'
        >
          {helperText}
        </Typography>
      )}
    </>
  );
};
