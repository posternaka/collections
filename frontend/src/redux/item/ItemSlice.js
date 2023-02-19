import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fields: {}
};

const ItemSlice = createSlice({
    name: 'Item',
    initialState,
    reducers: {
        setFields(state, action) {
            state.fields[action.payload.name] = action.payload.value
        }
    }
})

export default ItemSlice.reducer;
export const { setFields } = ItemSlice.actions;