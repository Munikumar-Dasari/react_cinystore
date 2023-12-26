import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';



 const SetFeedSlice = createSlice({
    name: "Label",
    initialState: {
     isLoading: false,
     FeedPage:'1'
    //  data: [],
    //  isError: false
    },
reducers:
{
    setFeedPage:(state,action)=>{
        state.FeedPage=action.payload;

    }
}
    // extraReducers: (builder) => {
    //  builder.addCase(fetchFeed.pending, (state, action) => {
    //   state.isLoading = true;
    //  })
    //  builder.addCase(fetchFeed.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.data = action.payload;
    //  })
    //  builder.addCase(fetchFeed.rejected, (state, action) => {
    //   state.isError = true;
    //  })
    // }
   });

   export default SetFeedSlice.reducer;
   export const {setFeedPage}=SetFeedSlice.actions;