import type { FC } from 'react';
import styles from './Header.module.scss';
import { nav_bar } from 'shared/consts';
import { Link } from 'react-router-dom';
import { Button } from 'shared/ui/button/Button';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to={'/'}>Logo</Link>
        </div>
        <nav>
          <ul>
            {nav_bar.map((nav) => (
              <li>
                <Link to={nav.to}>{nav.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.btns}>
          <Button variant='outlined'>Log In</Button>
          <Button>Register</Button>
        </div>
      </div>
    </header>
  );
};
