import { createSlice } from '@reduxjs/toolkit';
import { createComment, getComments, deleteComment } from './asyncAction';
import { STATUS } from '../types/status';

const initialState = {
    comments: {},
    status: STATUS.LOADING,
    error: null
}

const setError = (state, action) => {
    state.status = STATUS.ERROR;
    state.error = action.payload;
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addNewComment(state, action) {
            state.comments = action.payload;
        },
        removeComment(state, action) {
            state.comments.comments = state.comments.filter(it => it.id !== +action.payload);
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
            .addCase(createComment.rejected, setError)
            .addCase(deleteComment.rejected, setError)
    },
});

export default commentSlice.reducer;
export const { addNewComment, removeComment } = commentSlice.actions;