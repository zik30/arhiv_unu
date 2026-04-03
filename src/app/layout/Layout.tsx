import { Suspense, type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useScrollToTop } from 'shared/hooks/useScrollToTop';
import { Footer } from 'widgets/footer/Footer';
import { Header } from 'widgets/header/Header';
import styles from './Layout.module.scss';
import Loading from 'shared/ui/loading/Loading';

export const Layout: FC = () => {
  useScrollToTop();
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
