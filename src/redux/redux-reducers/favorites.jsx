import {createSlice} from '@reduxjs/toolkit';
//reducer for favorite movies
const favorites = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorites(state, action) {
      state = [...state,action.payload]
    },
  },
});
export const {addFavorites} = movies.actions;
export default favorites.reducer;
