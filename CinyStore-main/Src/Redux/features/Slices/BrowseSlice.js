import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBrowse = createAsyncThunk("fetchBrowse", async () => {
    const res = await fetch(`https://cinystore.com/CreateLabelGet_API`);
    return res?.json();
 });

 const BrowseSlice = createSlice({
    name: "Movilist",
    initialState: {
     isLoading: false,
     data: [],
     isError: false
    },
    extraReducers: (builder) => {
     builder.addCase(fetchBrowse.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(fetchBrowse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
     })
     builder.addCase(fetchBrowse.rejected, (state, action) => {
      state.isError = true;
     })
    }
   });

   export default BrowseSlice.reducer;