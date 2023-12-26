import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTrailer = createAsyncThunk("fetchTrailer", async () => {
    const res = await fetch(`https://cinystore.com/Trailers_API/`);
    return res?.json();
 });

 const TrailerSlice = createSlice({
    name: "fetchTrailer",
    initialState: {
     isLoading: false,
     data: [],
     isError: false
    },
    extraReducers: (builder) => {
     builder.addCase(fetchTrailer.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(fetchTrailer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
     })
     builder.addCase(fetchTrailer.rejected, (state, action) => {
      state.isError = true;
     })
    }
   });

   export default TrailerSlice.reducer;