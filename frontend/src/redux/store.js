import { combineReducers, configureStore } from '@reduxjs/toolkit';
import collectionSlice from './collection/collectionSlice';
import ItemSlice from './item/ItemSlice';
import tagSlice from './tag/tagSlice';
import CommentSlice from './comment/commentSlice';

const rootReducer = combineReducers({
    collection: collectionSlice,
    item: ItemSlice,
    tag: tagSlice,
    comment: CommentSlice
})

export const store = configureStore({
    reducer: rootReducer,
})