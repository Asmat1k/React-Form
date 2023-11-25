import { Link } from 'react-router-dom';

import styles from './main.module.scss';

function Main() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.link} to="/form1">
          <span className={styles.text}>Go to form1</span>
        </Link>
        <Link className={styles.link} to="/form2">
          <span className={styles.text}>Go to form2</span>
        </Link>
      </div>
    </section>
  );
}

export default Main;
