import { useRef, useState } from 'react';
import { useAppSelector } from '../../app/appHooks';
import { useDispatch } from 'react-redux';
import { FormFileds } from '../../shared/interfaces/form-fields';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import styles from './form-uncontrolled.module.scss';

import { updateData } from '../../app/appSlice';
import MyForm from '../../shared/interfaces/form-fields-types';
import { schema } from '../../features/yup/yup-validation';

function FormUncontrolled() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { country } = useAppSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateDataState = (obj: MyForm) => dispatch(updateData(obj));

  const handleSubmit: React.FormEventHandler<
    HTMLFormElement & FormFileds
  > = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const file = fileRef.current!.files!;

    const data = {
      name: formData.get('name') as string,
      age: +formData.get('age')!,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      cPassword: formData.get('cPassword') as string,
      gender: formData.get('gender') as string,
      checkbox: formData.get('TC') === 'on',
      file: file,
      country: formData.get('country') as string,
    };

    try {
      await schema.validate(data, { abortEarly: false });
      setErrors({});
    } catch (validationError) {
      if (validationError instanceof yup.ValidationError) {
        const newErrors: Record<string, string> = {};
        validationError.inner.forEach((error) => {
          newErrors[error.path!] = error.message;
        });
        setErrors(newErrors);
      }
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = function () {
      const fileBase64 = reader.result as string;
      const newData = { ...data, fileBase64 };
      updateDataState(newData);
    };

    setTimeout(() => {
      navigate('/');
    }, 500);
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
          <select name="gender" id="gender">
            <option>Man</option>
            <option>Woman</option>
          </select>
        </div>
        {errors.gender && <div className={styles.error}>{errors.gender}</div>}
      </div>

      <div className={styles.picker}>
        <div className={styles.area}>
          <label htmlFor="TC">T/C:</label>
          <input name="TC" type="checkbox" id="TC" />
        </div>
        {errors.checkbox && (
          <div className={styles.error}>{errors.checkbox}</div>
        )}
      </div>

      <div className={styles.formControl}>
        <label htmlFor="img">Image:</label>
        <div className={styles.area}>
          <input
            type="file"
            id="img"
            name="img"
            accept=".png, .jpeg"
            ref={fileRef}
          />
          {errors.file && <div className={styles.error}>{errors.file}</div>}
        </div>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="country">Country:</label>
        <div className={styles.area}>
          <select id="country" name="country">
            {country.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
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
