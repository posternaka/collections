import { createSlice } from '@reduxjs/toolkit';
import { addItem, getItems, getItem, updateItem, deleteItem } from './asyncAction';
import { STATUS } from '../types/types';

const initialState = {
    itemName: '',
    fields: {},
    collection: {},
    items: [],
    item: {},
    status: STATUS.LOADING,
    error: null
};

const setError = (state, action) => {
    state.status = STATUS.ERROR;
    state.error = action.payload;
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addNewItem (state, action) {
            state.items.push(action.payload);
        },
        updateCollectionItem (state, action) {
            const originalItem = state.items.find(item => item.id === +action.payload.id);
            state.originalItem.nameItem = action.payload.body.nameItem;
            state.originalItem.params = action.payload.body.params;
        },
        removeItem (state, action) {
            state.items = state.items.filter(it => it.id !== +action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getItems.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getItems.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.items = action.payload;
            })
            .addCase(getItem.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getItem.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.item = action.payload;
            })
            .addCase(addItem.rejected, setError)
            .addCase(updateItem.rejected, setError)
            .addCase(deleteItem.rejected, setError)
    },
})

export default itemSlice.reducer;
export const { addNewItem, updateCollectionItem, removeItem } = itemSlice.actions;