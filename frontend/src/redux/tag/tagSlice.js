import { createSlice } from '@reduxjs/toolkit';
import { createTag, addTag, getItemTags, getAllTags } from './asyncAction';
import { STATUS } from '../types/status';

const initialState = {
    itemTags: {},
    allTags: []
};

const setError = (state, action) => {
    state.status = STATUS.ERROR;
    state.error = action.payload;
}

const tagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {
        addNewTags(state, action) {
            state.itemTags.tags = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getItemTags.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getItemTags.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.itemTags = action.payload;
            })
            .addCase(getAllTags.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getAllTags.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.allTags = action.payload;
            })
            .addCase(getItemTags.rejected, setError)
            .addCase(getAllTags.rejected, setError)
            .addCase(addTag.rejected, setError)
            .addCase(createTag.rejected, setError)
    },
})

export default tagSlice.reducer;
export const { addNewTags } = tagSlice.actions;