import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? styles.active : '';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink className={setActive} to="/">
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink className={setActive} to="/form1">
                Form1
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink className={setActive} to="/form2">
                Form2
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
