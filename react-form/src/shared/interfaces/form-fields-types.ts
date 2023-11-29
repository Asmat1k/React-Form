export default interface MyForm {
  name: string;
  age: number;
  email: string;
  password: string;
  cPassword: string;
  gender: string;
  checkbox: boolean;
  file: FileList;
  country: string;
}

export interface MyFormTest {
  name: string;
  age: number;
  email: string;
  password: string;
  cPassword: string;
  gender: string;
  checkbox: boolean;
  file: FileList | null;
  country: string;
}
