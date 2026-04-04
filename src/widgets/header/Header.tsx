import { useState, type FC } from 'react';
import styles from './Header.module.scss';
import { langOptiions, nav_bar } from 'shared/consts';
import { Link } from 'react-router-dom';
import { Button } from 'shared/ui/button/Button';
import { Dropdown } from 'shared/ui/dropdown/Dropdown';
import { useAuth } from 'shared/hooks/auth/useAuth';
import { useTranslation } from 'react-i18next';
import { useIsResponsive } from 'shared/hooks/isResponsive';
import { Menu } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { Typography } from 'shared/ui/typography/Typography';

export const Header: FC = () => {
  const { isAuth, email } = useAuth();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const handleLangChange = (val: string) => {
    i18n.changeLanguage(val);
    setSelectedLang(val);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  console.log(i18n.language);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link to={'/'}>Logo</Link>
          </div>
          <nav>
            <ul>
              {nav_bar.map((nav) => (
                <li>
                  <Link to={nav.to}>{t(nav.label)}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.btns}>
            {!useIsResponsive() && (
              <Dropdown
                className={styles.dropdown}
                options={langOptiions}
                selected={selectedLang}
                onChange={(val) => handleLangChange(val)}
              />
            )}
            {isAuth ? (
              <Typography variant='bodyText' color='grey02'>
                {email}
              </Typography>
            ) : (
              <>
                <Link to={'/auth/login'}>
                  <Button variant='outlined'>Войти</Button>
                </Link>
                <Link to={'/auth/registration'}>
                  <Button>Регистрация</Button>
                </Link>
              </>
            )}

            {useIsResponsive() && (
              <Menu onClick={() => setMenuOpen(!menuOpen)} />
            )}
          </div>
        </div>
      </header>
      {useIsResponsive() && (
        <MobileNav
          selectedLang={selectedLang}
          handleLangChange={(val) => handleLangChange(val)}
          isOpen={menuOpen}
          isAuth={isAuth}
          setOpen={(val) => setMenuOpen(val)}
        />
      )}
    </>
  );
};
