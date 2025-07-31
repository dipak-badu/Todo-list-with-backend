// counterSlice.js
// counterSlice.js (better to name it authSlice.js)
import { createSlice, configureStore } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: '', isLoggedIn: false },
  reducers: {
   // You can define reducers here, e.g.:
    login(state, action) {
      state.user = action.payload;
     
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = '';
      state.isLoggedIn = false;
   }
  }
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
});




