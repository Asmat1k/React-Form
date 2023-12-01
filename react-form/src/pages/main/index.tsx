import { Link } from 'react-router-dom';

import styles from './main.module.scss';
import { useAppSelector } from '../../app/appHooks';

function Main() {
  const { data } = useAppSelector((state) => state.userReducer);
  return (
    <section className={styles.container}>
      <div className={styles.list}>
        <Link className={styles.link} to="/form1">
          <span className={styles.text}>Go to form1</span>
        </Link>
        <Link className={styles.link} to="/form2">
          <span className={styles.text}>Go to form2</span>
        </Link>
      </div>
      <div className={styles.info}>
        {data['name'] &&
          Object.entries(data).map((item, index) => {
            const [key, value] = item;
            if (key === 'file' || key === 'checkbox' || key === 'cPassword')
              return;
            if (key === 'fileBase64')
              return <img key={index} src={value as string} alt="" />;
            return (
              <div key={index} className={styles.data}>
                <div className={styles.title}>{key}: </div>
                <div className={styles.value}>{value}</div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Main;
