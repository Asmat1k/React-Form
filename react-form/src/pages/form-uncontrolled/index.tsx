import { useRef, useState } from 'react';
import { FormFileds } from '../../shared/interfaces/form-fields';

import styles from './form-uncontrolled.module.scss';
import validateFields from '../../features/formValidation';

function FormUncontrolled() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFileds> = (
    event
  ) => {
    event.preventDefault();
    const newErrors = validateFields(event);
    if (!(fileInputRef.current && fileInputRef.current!.files!.length > 0)) {
      newErrors.img = 'File is required';
    }
    setErrors(newErrors);
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
          {errors.age && <div className={styles.error}>{errors.age}</div>}
        </div>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="email">E-mail:</label>
        <div className={styles.area}>
          <input type="email" id="email" name="email" />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </div>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="password">Password:</label>
        <div className={styles.area}>
          <input type="password" id="password" name="password" />
          {errors.password && (
            <div className={styles.error}>{errors.password}</div>
          )}
        </div>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="cPassword">Confirm:</label>
        <div className={styles.area}>
          <input type="password" id="cPassword" name="cPassword" />
          {errors.cPassword && (
            <div className={styles.error}>{errors.cPassword}</div>
          )}
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
        {errors.gender && <div className={styles.error}>{errors.gender}</div>}
      </div>

      <div className={styles.picker}>
        <div className={styles.area}>
          <label htmlFor="TC">T/C:</label>
          <input type="checkbox" id="TC" />
        </div>
        {errors.TC && <div className={styles.error}>{errors.TC}</div>}
      </div>

      <div className={styles.formControl}>
        <label htmlFor="img">Image:</label>
        <div className={styles.area}>
          <input
            type="file"
            id="img"
            name="img"
            accept=".png, .jpeg"
            ref={fileInputRef}
          />
          {errors.img && <div className={styles.error}>{errors.img}</div>}
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
          {errors.country && (
            <div className={styles.error}>{errors.country}</div>
          )}
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormUncontrolled;
