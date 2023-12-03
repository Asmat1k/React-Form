import styles from './baseLayout.module.scss';

import { Outlet } from 'react-router-dom';
import { Header } from '../../../widgets/Header';

export function BaseLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
