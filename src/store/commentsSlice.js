import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//this is an async thunk for fetching comments from reddit
export const fetchComments = createAsyncThunk('comments/fetchComments', 
    async ({subreddit,postId}, thunkAPI) => {
        const { rejectWithValue} =thunkAPI;
        try
        {
            const response = await axios.get(`https://www.reddit.com/r/${subreddit}/comments/${postId}.json?raw_json=1`);
    
            if(response.data && response.data.length > 1)
            {
                return response.data[1].data.children.map(child => child.data);
            }

            throw new Error("Problems!")
        }
        catch(error)
        {
            return rejectWithValue(error.message);
        }
    }
);


//initial state for the slice
const initialState = {
    comments:[],
    status:'idle',
    error:null,
}


const commentsSlice = createSlice({
    name:'comments',
    initialState,
    error:null,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchComments.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchComments.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.comments = action.payload;
        })
        .addCase(fetchComments.rejected, (state,action) => {
            state.status = 'failed';
            state.error = "HISS!! NO CATS WANTS TO TALK ABOUT THIS POST!";
       })
    }
});


export default commentsSlice.reducer;