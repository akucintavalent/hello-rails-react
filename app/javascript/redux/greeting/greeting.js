import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Welcome',
};

export const counterSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    setGreeting: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGreeting } = counterSlice.actions;

export default counterSlice.reducer;
