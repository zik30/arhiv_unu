import styles from './Dropdown.module.scss';
import { Typography } from '../typography/Typography';
import classNames from 'classnames';
import { ChevronDown } from 'lucide-react';
import { useState, type FC } from 'react';

type OptionT = {
  value: string;
  label: string;
};

interface DropdownI {
  selected?: string;
  placeholder?: string;
  options: OptionT[];
  onChange: (val: string) => void;
  className?: string;
}

export const Dropdown: FC<DropdownI> = ({
  selected,
  placeholder,
  options,
  onChange,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const handleChange = (value: string) => {
    setOpen(false);
    onChange(value);
  };
  return (
    <div className={classNames(styles.dropdown, className)}>
      <div onClick={() => setOpen(!open)} className={styles.item}>
        <Typography variant='bodyText' color='secondary' weight='semiBold'>
          {selected ? selected : placeholder}
        </Typography>
        <ChevronDown
          color='var(--secondary)'
          className={classNames(styles.icon, open && styles.open)}
        />
      </div>
      <div className={classNames(styles.options, open && styles.open)}>
        {options.map((option) => (
          <div
            key={option.value}
            className={styles.option}
            onClick={() => handleChange(option.value)}
          >
            <Typography variant='bodyText' color='grey02'>
              {option.label}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
