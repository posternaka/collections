import { createSlice } from '@reduxjs/toolkit';
import { addItem, getAllItems, getCollectionItems, getItem, updateItem, deleteItem } from './asyncAction';
import { STATUS } from '../types/status';

const initialState = {
    newItemId: '',
    itemName: '',
    options: {},
    collection: {},
    allItems: [],
    collectionItems: [],
    item: {},
    tags: [],
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
        setOptionsWithEdit(state, action) {
            state.options = action.payload;
        },
        setOptions(state, action) {
            state.options[action.payload.nameOption] = action.payload.valueOption;
        },
        addNewItem (state, action) {
            console.log(action.payload);
            state.newItemId = action.payload.id;
            state.collectionItems.push(action.payload);
        },
        updateCollectionItem (state, action) {
            const originalItem = state.collectionItems.find(item => item.id === +action.payload.id);
            originalItem.nameItem = action.payload.body.nameItem;
            originalItem.params = action.payload.body.params;
            originalItem.tags = action.payload.body.tags;
        },
        removeItem (state, action) {
            state.collectionItems = state.collectionItems.filter(it => it.id !== +action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllItems.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getAllItems.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.allItems = action.payload;
            })
            .addCase(getCollectionItems.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getCollectionItems.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.collectionItems = action.payload;
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
export const { setOptions, setOptionsWithEdit, addNewItem, updateCollectionItem, removeItem } = itemSlice.actions;