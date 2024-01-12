export default interface MyForm {
  name: string;
  age: number;
  email: string;
  password: string;
  cPassword: string;
  gender: string;
  checkbox: boolean;
  file: FileList;
  fileBase64?: string;
  country: string;
}

export interface MyUncForm {
  name: string;
  age: number;
  email: string;
  password: string;
  cPassword: string;
  gender: string;
  checkbox: boolean;
  file: File;
  fileBase64?: string;
  country: string;
}
