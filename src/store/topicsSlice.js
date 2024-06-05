
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTopics = createAsyncThunk('topics/fetchTopics', 
async () => {
    const response = await axios.get(`https://www.reddit.com/subreddits/popular.json`);
    return response.data.data.children.map((child)=> child.data);
}
);

//initial state for the slice
const initialState = {
    topics:[],
    status:'idle',
    error:null,
}



const topicsSlice = createSlice({
    name:'topics',
    initialState,
    error:null,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchTopics.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchTopics.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.topics = action.payload;
        })
        .addCase(fetchTopics.rejected, (state,action) => {
            state.status = 'failed';
            state.error = action.error.message;
       })
    }
});


export default topicsSlice.reducer;