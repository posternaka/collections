import { createSlice } from '@reduxjs/toolkit';
import { createTag, getTags, getLastTags } from './asyncAction';
import { STATUS } from '../types/status';

const initialState = {
    tags: [],
    lastTags: [],
    status: STATUS.LOADING,
    error: null
};

const setError = (state, action) => {
    state.status = STATUS.ERROR;
    state.error = action.payload;
}

const tagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {
        addTag(state, action) {
            state.tags.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTags.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getTags.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.tags = action.payload;
            })
            .addCase(getLastTags.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getLastTags.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.lastTags = action.payload;
            })
            .addCase(createTag.rejected, setError)
    },
})

export default tagSlice.reducer;
export const { addTag } = tagSlice.actions;