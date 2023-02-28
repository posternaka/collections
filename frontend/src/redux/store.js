import { combineReducers, configureStore } from '@reduxjs/toolkit';
import collectionSlice from './collection/collectionSlice';
import itemSlice from './item/itemSlice';
import tagSlice from './tag/tagSlice';
import commentSlice from './comment/commentSlice';
import likeSlice from './like/likeSlice';

const rootReducer = combineReducers({
    collection: collectionSlice,
    item: itemSlice,
    tag: tagSlice,
    comment: commentSlice,
    like: likeSlice
})

export const store = configureStore({
    reducer: rootReducer,
})