import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tags: [],
    tagsDB: [],
    tag: []
};

const tagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {
        setTagName(state, action) {
            state.tags = action.payload;
        },
        setTagsDB(state, action) {
            state.tagsDB = action.payload;
        },
        setTag(state, action) {
            state.tag = action.payload;
        }
    }
})

export default tagSlice.reducer;
export const { setTagName, setTagsDB, setTag } = tagSlice.actions;