import { FormFileds } from '../../shared/interfaces/form-fields';

export default function validateFields(event: React.FormEvent<FormFileds>) {
  const form = event?.currentTarget;
  const { name, age, email, password, cPassword, TC, country } = form;

  const visErrors: Record<string, string> = {};

  if (!/^[A-Z]/.test(name.value)) {
    visErrors.name = 'First letter should be capital';
  }
  if (parseInt(age.value, 10) <= 0 || !age.value) {
    visErrors.age = 'Age should be a postive number';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    visErrors.email = 'E-mail format is not valid!';
  }

  if (!/^(?=.*[a-z])(?=.{1,})/.test(password.value)) {
    visErrors.password = 'Should be 1 lowercase letter';
  }
  if (!/^(?=.*[A-Z])(?=.{1,})/.test(password.value)) {
    visErrors.password = 'Should be 1 capital letter';
  }
  if (!/^(?=.*[!@#\\$%\\^&\\*])(?=.{1,})/.test(password.value)) {
    visErrors.password = 'Should be 1 special character';
  }
  if (!/^(?=.*[0-9])(?=.{1,})/.test(password.value)) {
    visErrors.password = 'Should be 1 number';
  }

  if (!visErrors.password && password.value !== cPassword.value) {
    visErrors.cPassword = 'Passwords do not match';
  }

  if (!TC.checked) {
    visErrors.TC = 'Accept the terms and conditions';
  }

  if (!country.value) {
    visErrors.country = 'Country is required';
  }

  return visErrors;
}
