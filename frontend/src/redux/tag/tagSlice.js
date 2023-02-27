import { createSlice } from '@reduxjs/toolkit';
import { addTag, getItemTags, getAllTags, updateTag } from './asyncAction';
import { STATUS } from '../types/types';

const initialState = {
    createTag: [],
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
            state.itemTags = action.payload;
            state.allTags.push({ tags: action.payload.tags });
        },
        createTags(state, action) {
            state.createTag.push(action.payload);
        },
        updateItemTags(state, action) {
            state.itemTags.tags = action.payload.body;
            state.allTags.push({ tags: action.payload.body });
        }
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
            .addCase(updateTag.rejected, setError)
    },
})

export default tagSlice.reducer;
export const { createTags, updateItemTags, addNewTags } = tagSlice.actions;