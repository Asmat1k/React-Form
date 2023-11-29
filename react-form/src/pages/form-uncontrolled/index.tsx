import { FormFileds } from '../../shared/interfaces/form-fields';

import styles from './form-uncontrolled.module.scss';

function FormUncontrolled() {
  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFileds> = (
    event
  ) => {
    event.preventDefault();
    const form = event?.currentTarget;
    console.log(Object.values(form));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formControl}>
        <label htmlFor="name">Name:</label>
        <div className={styles.area}>
          <input type="text" id="name" name="name" />
        </div>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="age">Age:</label>
        <div className={styles.area}>
          <input type="number" id="age" name="age" />
        </div>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="email">E-mail:</label>
        <div className={styles.area}>
          <input type="email" id="email" name="email" />
        </div>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="password1">Password:</label>
        <div className={styles.area}>
          <input type="password" id="password1" name="password1" />
        </div>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="password2">Confirm:</label>
        <div className={styles.area}>
          <input type="password" id="password2" name="password2" />
        </div>
      </div>

      <div className={styles.picker}>
        <div className={styles.gen}>
          <label htmlFor="gender">Gender:</label>
          <select id="gender">
            <option>Man</option>
            <option>Woman</option>
          </select>
        </div>
      </div>

      <div className={styles.picker}>
        <div className={styles.area}>
          <label htmlFor="TC">T/C:</label>
          <input type="checkbox" id="TC" />
        </div>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="picture">Image:</label>
        <div className={styles.area}>
          <input type="file" id="picture" name="picture" accept=".png, .jpeg" />
        </div>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="country">Country:</label>
        <div className={styles.area}>
          <select id="country" name="country">
            <option value="" disabled>
              Select Country
            </option>
          </select>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormUncontrolled;
