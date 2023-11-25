import { createSlice } from '@reduxjs/toolkit';

interface DefaultState {
  name: string;
  age: number;
  email: string;
  password: string;
  cPassword: string;
  radio: string;
  checkbox: boolean;
  file: FileList | null;
  country: string;
}

const initialState: DefaultState = {
  name: '',
  age: 0,
  email: '',
  password: '',
  cPassword: '',
  radio: '',
  checkbox: false,
  file: null,
  country: '',
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
