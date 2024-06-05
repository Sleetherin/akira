import {configureStore} from '@reduxjs/toolkit';
import topicsReducer from './topicsSlice';
import postsReducer from './postsSlice';

//the store created for the reducers
const store = configureStore({
    reducer: {
        posts:postsReducer,
        topics:topicsReducer,
    }
});

export default store;