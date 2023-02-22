import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    itemName: '',
    fields: {},
    collection: {},
    items: [],
};

const ItemSlice = createSlice({
    name: 'Item',
    initialState,
    reducers: {
        setName(state, action) {
            state.itemName = action.payload;
        },
        setFields(state, action) {
            state.fields[action.payload.name] = action.payload.value;
        },
        setCollection(state, action) {
            state.collection = action.payload;
        },
        setItems(state, action) {
            state.items = action.payload;
        },
    }
})

export default ItemSlice.reducer;
export const { setName, setFields, setCollection, setItems } = ItemSlice.actions;