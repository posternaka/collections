import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ItemSlice from './item/ItemSlice';
import tagSlice from './tag/tagSlice';

const rootReducer = combineReducers({
    item: ItemSlice,
    tag: tagSlice
})

export const store = configureStore({
    reducer: rootReducer,
})