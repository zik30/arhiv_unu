import { useState, type FC } from 'react';
import styles from './Filter.module.scss';
import { Typography } from 'shared/ui/typography/Typography';
import { Button } from 'shared/ui/button/Button';
import { X } from 'lucide-react';
import classNames from 'classnames';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterState {
  regions: string[];
  districts: string[];
  occupations: string[];
  charges: string[];
}

interface FilterProps {
  onApply: (filters: FilterState) => void;
  onClear: () => void;
  className?: string;
}

const regions: FilterOption[] = [
  { id: '1', label: 'Bishkek' },
  { id: '2', label: 'Chui' },
  { id: '3', label: 'Issyk-Kul' },
  { id: '4', label: 'Karakol' },
  { id: '5', label: 'Naryn' },
  { id: '6', label: 'Talas' },
  { id: '7', label: 'Jalal-Abad' },
  { id: '8', label: 'Osh' },
];

const districts: FilterOption[] = [
  { id: '1', label: 'Central' },
  { id: '2', label: 'South' },
  { id: '3', label: 'North' },
  { id: '4', label: 'East' },
  { id: '5', label: 'West' },
];

const occupations: FilterOption[] = [
  { id: '1', label: 'Worker' },
  { id: '2', label: 'Teacher' },
  { id: '3', label: 'Doctor' },
  { id: '4', label: 'Farmer' },
  { id: '5', label: 'Official' },
  { id: '6', label: 'Artist' },
  { id: '7', label: 'Writer' },
];

const charges: FilterOption[] = [
  { id: '1', label: 'Political Activity' },
  { id: '2', label: 'Counter-revolutionary' },
  { id: '3', label: 'Espionage' },
  { id: '4', label: 'Sabotage' },
  { id: '5', label: 'Religious Activity' },
  { id: '6', label: 'Theft' },
];

export const Filter: FC<FilterProps> = ({ onApply, onClear, className }) => {
  const [filters, setFilters] = useState<FilterState>({
    regions: [],
    districts: [],
    occupations: [],
    charges: [],
  });

  const handleToggle = (key: keyof FilterState, id: string) => {
    setFilters((prev) => {
      const current = prev[key];
      const updated = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];
      return { ...prev, [key]: updated };
    });
  };

  const handleApply = () => {
    onApply(filters);
  };

  const handleClear = () => {
    setFilters({
      regions: [],
      districts: [],
      occupations: [],
      charges: [],
    });
    onClear();
  };

  const isActive = Object.values(filters).some((arr) => arr.length > 0);

  const renderFilterGroup = (
    title: string,
    options: FilterOption[],
    key: keyof FilterState,
  ) => (
    <div className={styles.filterGroup}>
      <Typography
        variant='bodyText'
        weight='semiBold'
        className={styles.groupTitle}
      >
        {title}
      </Typography>
      <div className={styles.optionsList}>
        {options.map((option) => (
          <label key={option.id} className={styles.option}>
            <input
              type='checkbox'
              checked={filters[key].includes(option.id)}
              onChange={() => handleToggle(key, option.id)}
              className={styles.checkbox}
            />
            <Typography variant='bodyText2'>{option.label}</Typography>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className={classNames(styles.filter, className)}>
      <div className={styles.header}>
        <Typography variant='h3'>Filters</Typography>
        {isActive && (
          <Button variant='grey' size='short' onClick={handleClear}>
            <X size={16} />
          </Button>
        )}
      </div>

      <div className={styles.content}>
        {renderFilterGroup('Region', regions, 'regions')}
        {renderFilterGroup('District', districts, 'districts')}
        {renderFilterGroup('Occupation', occupations, 'occupations')}
        {renderFilterGroup('Charge', charges, 'charges')}
      </div>

      <div className={styles.footer}>
        <Button variant='outlined' onClick={handleClear} fullWidth>
          Clear All
        </Button>
        <Button variant='primary' onClick={handleApply} fullWidth>
          Apply
        </Button>
      </div>
    </div>
  );
};
