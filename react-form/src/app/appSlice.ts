import { createSlice } from '@reduxjs/toolkit';

interface DefaultState {
  data: {
    name: string;
    age: number;
    email: string;
    password: string;
    cPassword: string;
    radio: string;
    checkbox: boolean;
    file: FileList | null;
    country: string;
  };
}

const initialState: DefaultState = {
  data: {
    name: '',
    age: 0,
    email: '',
    password: '',
    cPassword: '',
    radio: '',
    checkbox: false,
    file: null,
    country: '',
  },
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
