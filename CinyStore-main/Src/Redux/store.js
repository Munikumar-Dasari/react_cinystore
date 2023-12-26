import { configureStore } from '@reduxjs/toolkit';
import BrowseSlice from './features/Slices/BrowseSlice';
import CreateLabel from './features/Slices/CreateLabel';
import FeedSlice from './features/Slices/FeedSlice';
import TrailerSlice from './features/Slices/TrailerSlice';
import AllReviewSlice from './features/Slices/AllReviewSlice';
import TmdbSlice from './features/Slices/TmdbSlice';
import PageSlice from './features/Slices/PageSlice';
export const store = configureStore({
    reducer: {
        Broswe: BrowseSlice,
        Label:CreateLabel,
        Feed:FeedSlice,
        Trailer:TrailerSlice,
        Reviews:AllReviewSlice,
        tmdbMovie:TmdbSlice,
        PageSlice:PageSlice,
    }
});