import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ItemSlice from './item/ItemSlice';

const rootReducer = combineReducers({
    item: ItemSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})