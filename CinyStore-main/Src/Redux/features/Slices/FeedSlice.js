import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFeed = createAsyncThunk("fetchFeed", async (page) => {
    const res = await fetch(`https://cinystore.com/CombinedFeed_API?page=${page}`);
    return res?.json();
 });

 const FeedSlice = createSlice({
    name: "Label",
    initialState: {
     isLoading: false,
     data: [],
     isError: false
    },
    extraReducers: (builder) => {
     builder.addCase(fetchFeed.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(fetchFeed.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
     })
     builder.addCase(fetchFeed.rejected, (state, action) => {
      state.isError = true;
     })
    }
   });

   export default FeedSlice.reducer;