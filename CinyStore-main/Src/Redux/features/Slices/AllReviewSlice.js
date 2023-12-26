import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

export const fetchReview = createAsyncThunk("fetchReview", async () => {
    const res = await fetch(`https://cinystore.com/AllReview_API`);
    return res?.json();
 });

 const AllReviewSlice = createSlice({
    name: "AllReview",
    initialState: {
     isLoading: false,
     data: [],
     isError: false
    },
    extraReducers: (builder) => {
     builder.addCase(fetchReview.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(fetchReview.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
     })
     builder.addCase(fetchReview.rejected, (state, action) => {
      state.isError = true;
     })
    }
   });

   export default AllReviewSlice.reducer;