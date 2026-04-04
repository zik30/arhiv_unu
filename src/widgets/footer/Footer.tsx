import type { FC } from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { nav_bar } from 'shared/consts';
import { useTranslation } from 'react-i18next';

export const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <nav>
        {nav_bar.map((nav) => (
          <Link to={nav.to}>{t(nav.label)}</Link>
        ))}
      </nav>
      <div className={styles.own}>made by VibeCoders</div>
    </footer>
  );
};
