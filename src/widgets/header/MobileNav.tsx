import { useTransition, type FC } from 'react';
import styles from './Header.module.scss';
import { langOptiions, nav_bar } from 'shared/consts';
import { Link } from 'react-router-dom';
import { Button } from 'shared/ui/button/Button';
import { Container } from 'shared/ui/container/Container';
import classNames from 'classnames';
import { Dropdown } from 'shared/ui/dropdown/Dropdown';

type Props = {
  isAuth: boolean;
  isOpen: boolean;
  setOpen: (val: boolean) => void;
  handleLangChange: (val: string) => void;
  selectedLang: string;
};

export const MobileNav: FC<Props> = ({
  isOpen,
  isAuth,
  setOpen,
  selectedLang,
  handleLangChange,
}) => {
  const { t } = useTransition();
  return (
    <div className={classNames(styles.responsiveNav, isOpen && styles.isOpen)}>
      <Container className={styles.innerNav}>
        {nav_bar.map((nav) => (
          <Link onClick={() => setOpen(false)} to={nav.to}>
            {t('nav.label')}
          </Link>
        ))}
        {!isAuth && (
          <>
            <Link to={'/auth/login'}>
              <Button variant='outlined'>Войти</Button>
            </Link>
            <Link to={'/auth/registration'}>
              <Button>Регистрация</Button>
            </Link>
          </>
        )}
        {
          <Dropdown
            className={styles.dropdown}
            options={langOptiions}
            selected={selectedLang}
            onChange={(val) => handleLangChange(val)}
          />
        }
      </Container>
    </div>
  );
};
