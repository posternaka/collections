import { createSlice } from '@reduxjs/toolkit';
import { addComment, getComments, deleteComment } from './asyncAction';
import { STATUS } from '../types/types';

const initialState = {
    comments: [],
    status: STATUS.LOADING,
    error: null
}

const setError = (state, action) => {
    state.status = STATUS.ERROR;
    state.error = action.payload;
}

const CommentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addNewComment(state, action) {
            state.comments.push(action.payload);
        },
        removeComment(state, action) {
            state.comments.filter(it => it !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getComments.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.comments = action.payload;
            })
            .addCase(getComments.rejected, setError)
            .addCase(addComment.rejected, setError)
            .addCase(deleteComment.rejected, setError)
    },
});

export default CommentSlice.reducer;
export const { addNewComment, removeComment } = CommentSlice.actions;