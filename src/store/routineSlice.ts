import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type RoutineState = {
  msg: string;
};

const initialState: RoutineState = {
  msg: 'hello world'
};

const routineSlice = createSlice({
  name: 'routine',
  initialState,
  reducers: {
    setMsg: (state, action: PayloadAction<string>) => {
      state.msg = action.payload;
    }
  }
});

export const { setMsg } = routineSlice.actions;

export default routineSlice.reducer;
