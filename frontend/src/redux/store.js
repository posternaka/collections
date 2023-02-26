import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ItemSlice from './item/ItemSlice';
import tagSlice from './tag/tagSlice';
import CommentSlice from './comment/commentSlice';

const rootReducer = combineReducers({
    item: ItemSlice,
    tag: tagSlice,
    comment: CommentSlice
})

export const store = configureStore({
    reducer: rootReducer,
})