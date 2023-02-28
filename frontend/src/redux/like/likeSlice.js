import { createSlice } from '@reduxjs/toolkit';
import { createLike, getLike, updateLike } from './asyncAction';
import { STATUS } from '../types/status';

const initialState = {
    like: {},
    status: STATUS.LOADING,
    error: null
};

const setError = (state, action) => {
    state.status = STATUS.ERROR;
    state.error = action.payload;
}

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        updateUserLike (state, action) {
            state.like = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLike.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getLike.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.like = action.payload;
            })
            .addCase(createLike.rejected, setError)
            .addCase(updateLike.rejected, setError)
    },
})

export default likeSlice.reducer;
export const { updateUserLike } = likeSlice.actions;