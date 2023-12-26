import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTMDB = createAsyncThunk("fetchTMDB", async () => {
    const res = await fetch(`https://cinystore.com/TmdbMovies_API`);
    return res?.json();
 });

 const TMDBSlice = createSlice({
    name: "TmdbMovie",
    initialState: {
     isLoading: false,
     data: [],
     isError: false
    },
    extraReducers: (builder) => {
     builder.addCase(fetchTMDB.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(fetchTMDB.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
     })
     builder.addCase(fetchTMDB.rejected, (state, action) => {
      state.isError = true;
     })
    }
   });

   export default TMDBSlice.reducer;