import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './postsSlice';

//the store created for the reducers
const store = configureStore({
    reducer: {
        posts:postsReducer,
    }
});

export default store;