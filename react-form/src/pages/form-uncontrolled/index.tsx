import { FormFileds } from '../../shared/interfaces/form-fields';

import styles from './form-uncontrolled.module.scss';

function FormUncontrolled() {
  let errors: Record<string, string> = {};

  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFileds> = (
    event
  ) => {
    event.preventDefault();
    const form = event?.currentTarget;
    const { name, age, email, password1, password2 } = form;

    errors = {};

    if (!/^[A-Z]/.test(name.value)) {
      errors.name = 'Name should start with an uppercase letter';
    }

    if (parseInt(age.value, 10) < 0) {
      errors.age = 'Age should be a non-negative number';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errors.email = 'Invalid email format';
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/.test(
        password1.value
      )
    ) {
      errors.password1 =
        'Password should contain at least 1 number, 1 lowercase letter, 1 uppercase letter, and 1 special character';
    }

    if (password1.value !== password2.value) {
      errors.password2 = 'Passwords do not match';
    }
    console.log(errors.password1);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formControl}>
        <label htmlFor="name">Name:</label>
        <div className={styles.area}>
          <input type="text" id="name" name="name" />
          {errors.name && <div className={styles.error}>{errors.name}</div>}
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
