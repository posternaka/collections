import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fields: {},
    collection: {}
};

const ItemSlice = createSlice({
    name: 'Item',
    initialState,
    reducers: {
        setFields(state, action) {
            state.fields[action.payload.name] = action.payload.value
        },
        setCollection(state, action) {
            state.collection = action.payload;
        }
    }
})

export default ItemSlice.reducer;
export const { setFields, setCollection } = ItemSlice.actions;