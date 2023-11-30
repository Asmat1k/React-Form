import { createSlice } from '@reduxjs/toolkit';

interface DefaultState {
  data: {
    name: string;
    age: number;
    email: string;
    password: string;
    cPassword: string;
    gender: string;
    checkbox: boolean;
    fileBase64: string;
    country: string;
  };
  country: Array<string>;
}

const initialState: DefaultState = {
  data: {
    name: '',
    age: 0,
    email: '',
    password: '',
    cPassword: '',
    gender: '',
    checkbox: false,
    fileBase64: '',
    country: '',
  },
  country: [
    'Russia',
    'Republic of Belarus',
    'Ukraine',
    'USA',
    'France',
    'Turkey',
    'Other...',
  ],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { updateData } = dataSlice.actions;

export default dataSlice.reducer;
