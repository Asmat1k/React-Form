import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? styles.active : '';

export function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink className={setActive} to="/form1">
              Form-1
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={setActive} to="/">
              Main
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={setActive} to="/form2">
              Form-2
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
