import type { FC } from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { nav_bar } from 'shared/consts';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        {nav_bar.map((nav) => (
          <Link to={nav.to}>{nav.label}</Link>
        ))}
      </nav>
      <div className={styles.own}>made by VibeCoders</div>
    </footer>
  );
};
