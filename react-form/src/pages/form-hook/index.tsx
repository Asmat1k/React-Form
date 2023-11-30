import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';

import styles from './form-hook.module.scss';

import { updateData } from '../../app/appSlice';
import { useAppSelector } from '../../app/appHooks';

import MyForm from '../../shared/interfaces/form-fields-types';

import { schema } from '../../features/yup/yup-validation';

function FormHook() {
  const { register, handleSubmit, formState, reset } = useForm<MyForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const { errors, isDirty, isValid } = formState;

  const { country } = useAppSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const updateDataState = (obj: MyForm) => dispatch(updateData(obj));

  const submit: SubmitHandler<MyForm> = async (data) => {
    const reader = new FileReader();
    reader.readAsDataURL(data.file[0]);
    reader.onload = function () {
      const fileBase64 = reader.result as string;
      const newData = { ...data, fileBase64 };
      updateDataState(newData);
    };

    reset();

    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <div className={styles.formControl}>
          <label htmlFor="name">Name:</label>
          <div className={styles.area}>
            <input type="text" id="name" {...register('name')} />
            <div className={styles.error}>{errors.name?.message}</div>
          </div>
        </div>

        <div className={styles.formControl}>
          <label htmlFor="age">Age:</label>
          <div className={styles.area}>
            {' '}
            <input
              type="number"
              id="age"
              min={0}
              max={120}
              {...register('age')}
            />
            <div className={styles.error}>{errors.age?.message}</div>
          </div>
        </div>

        <div className={styles.formControl}>
          <label htmlFor="email">E-mail:</label>
          <div className={styles.area}>
            {' '}
            <input type="email" id="email" {...register('email')} />
            <div className={styles.error}>{errors.email?.message}</div>
          </div>
        </div>

        <div className={styles.formControl}>
          <label htmlFor="password">Password:</label>
          <div className={styles.area}>
            {' '}
            <input type="password" id="password" {...register('password')} />
            <div className={styles.error}>{errors.password?.message}</div>
          </div>
        </div>

        <div className={styles.formControl}>
          <label htmlFor="cPassword">Confirm:</label>
          <div className={styles.area}>
            {' '}
            <input type="password" id="cPassword" {...register('cPassword')} />
            <div className={styles.error}>{errors.cPassword?.message}</div>
          </div>
        </div>

        <div className={styles.picker}>
          {' '}
          <div className={styles.gen}>
            <label htmlFor="gender">Gender:</label>
            <select id="gender" {...register('gender')}>
              <option>Man</option>
              <option>Woman</option>
            </select>
          </div>
          <div className={styles.error}>{errors.gender?.message}</div>
        </div>

        <div className={styles.picker}>
          <div className={styles.area}>
            <label htmlFor="TC">T/C:</label>
            <input type="checkbox" id="TC" {...register('checkbox')} />
          </div>
          <div className={styles.error}>{errors.checkbox?.message}</div>
        </div>

        <div className={styles.formControl}>
          <label htmlFor="img">Image:</label>
          <div className={styles.area}>
            {' '}
            <input
              type="file"
              accept=".png, .jpeg"
              id="img"
              {...register('file')}
            />
            <div className={styles.error}>{errors.file?.message}</div>
          </div>
        </div>

        <div className={styles.formControl}>
          <label htmlFor="country">Country:</label>
          <div className={styles.area}>
            {' '}
            <select id="country" {...register('country')}>
              {country.map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
            <div className={styles.error}>{errors.country?.message}</div>
          </div>
        </div>

        <button disabled={!isDirty || !isValid} className={styles.btn}>
          Submit
        </button>
      </form>
    </>
  );
}

export default FormHook;
