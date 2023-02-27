import { combineReducers, configureStore } from '@reduxjs/toolkit';
import collectionSlice from './collection/collectionSlice';
import itemSlice from './item/itemSlice';
import tagSlice from './tag/tagSlice';
import CommentSlice from './comment/commentSlice';

const rootReducer = combineReducers({
    collection: collectionSlice,
    item: itemSlice,
    tag: tagSlice,
    comment: CommentSlice
})

export const store = configureStore({
    reducer: rootReducer,
})