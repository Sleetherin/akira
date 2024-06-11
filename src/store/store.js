import {configureStore} from '@reduxjs/toolkit';
import topicsReducer from './topicsSlice';
import postsReducer from './postsSlice';
import commentsReducer from './commentsSlice';

//the store created for the reducers
const store = configureStore({
    reducer: {
        posts:postsReducer,
        topics:topicsReducer,
        comments:commentsReducer,
    }
});

export default store;