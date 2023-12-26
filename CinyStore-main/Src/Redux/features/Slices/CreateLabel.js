import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLabel = createAsyncThunk("fetchLabel", async () => {
    const res = await fetch(`https://cinystore.com/CreateLabelGet_API`);
    return res?.json();
 });

 const LabelSlice = createSlice({
    name: "Label",
    initialState: {
     isLoading: false,
     data: [],
     isError: false
    },
    extraReducers: (builder) => {
     builder.addCase(fetchLabel.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(fetchLabel.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
     })
     builder.addCase(fetchLabel.rejected, (state, action) => {
      state.isError = true;
     })
    }
   });

   export default LabelSlice.reducer;