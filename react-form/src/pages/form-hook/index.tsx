import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './form-hook.module.scss';

interface MyForm {
  name: string;
  age: number;
  email: string;
  password: string;
  cPassword: string;
  radio: string;
  checkbox: boolean;
  file: string;
}

const schema = yup.object({
  name: yup.string().required('Username is required'),
  age: yup
    .number()
    .typeError('Age is required')
    .positive()
    .integer()
    .required('Age is required'),
  email: yup
    .string()
    .email('E-mail format is not valid!')
    .required('E-mail is required'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.{1,})/,
      'Should conatin at least 1 lowercase letter'
    )
    .matches(
      /^(?=.*[A-Z])(?=.{1,})/,
      'Should conatin at least 1 capital letter'
    )
    .matches(
      /^(?=.*[!@#\\$%\\^&\\*])(?=.{1,})/,
      'Should conatin at least 1 special character'
    )
    .matches(/^(?=.*[0-9])(?=.{1,})/, 'Should conatin at least 1 number')
    .required('Password is required'),
  cPassword: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.{1,})/,
      'Should conatin at least 1 lowercase letter'
    )
    .matches(
      /^(?=.*[A-Z])(?=.{1,})/,
      'Should conatin at least 1 capital letter'
    )
    .matches(
      /^(?=.*[!@#\\$%\\^&\\*])(?=.{1,})/,
      'Should conatin at least 1 special character'
    )
    .matches(/^(?=.*[0-9])(?=.{1,})/, 'Should conatin at least 1 number')
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm your password!'),
  radio: yup.string().required('Pick a gender!'),
  checkbox: yup
    .boolean()
    .oneOf([true], 'You need to accept the terms and conditions')
    .required('This is required'),
  file: yup.string().required('File is required'),
});

function FormHook() {
  const { register, handleSubmit, formState } = useForm<MyForm>({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const submit: SubmitHandler<MyForm> = (data) => {
    console.log(data);
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
            <input type="number" id="age" {...register('age')} />
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
          <label htmlFor="cPassword">Confirm password:</label>
          <div className={styles.area}>
            {' '}
            <input type="password" id="cPassword" {...register('cPassword')} />
            <div className={styles.error}>{errors.cPassword?.message}</div>
          </div>
        </div>

        <div className={styles.formControl}>
          <div className={styles.gender}>
            {' '}
            <div className={styles.gen}>
              <label htmlFor="man">Man:</label>
              <input type="radio" id="man" {...register('radio')} />
            </div>
            <div className={styles.gen}>
              <label htmlFor="woman">Woman:</label>
              <input type="radio" id="woman" {...register('radio')} />
            </div>
          </div>
          <div className={styles.error}>{errors.radio?.message}</div>
        </div>

        <div className={styles.formControl}>
          <label htmlFor="TC">T/C:</label>
          <div className={styles.area}>
            {' '}
            <input type="checkbox" id="TC" {...register('checkbox')} />
            <div className={styles.error}>{errors.checkbox?.message}</div>
          </div>
        </div>

        <div className={styles.formControl}>
          <label htmlFor="img">Image:</label>
          <div className={styles.area}>
            {' '}
            <input type="image" id="img" {...register('file')} />
            <div className={styles.error}>{errors.file?.message}</div>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default FormHook;
