import { createSlice } from '@reduxjs/toolkit';
import { addCollection, getUserCollections, getAllCollections, updateCollection, deleteCollection } from './asyncAction';
import { STATUS } from '../types/types';

const initialState = {
    updateCollection: {
        name: '',
        theme: '',
        description: '',
        settingsCollection: [],
    },
    userCollections: [],
    allCollections: [],
    status: STATUS.LOADING,
    error: null
}

const setError = (state, action) => {
    state.status = STATUS.ERROR;
    state.error = action.payload;
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addNewCollection (state, action) {
            state.userCollections.push(action.payload);
        },
        updateUserCollection (state, action) {
            const originalCollection = state.userCollections.find(collection => collection.id === +action.payload.id);
            originalCollection.collectionName = action.payload.body.collectionName;
            originalCollection.theme = action.payload.body.theme;
            originalCollection.description = action.payload.body.description;
            originalCollection.settings = action.payload.body.settings;
        },
        removeCollection (state, action) {
            state.userCollections = state.userCollections.filter(it => it.id !== +action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserCollections.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getUserCollections.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.userCollections = action.payload;
            })
            .addCase(getAllCollections.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getAllCollections.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.allCollections = action.payload;
            })
            .addCase(getUserCollections.rejected, setError)
            .addCase(getAllCollections.rejected, setError)
            .addCase(addCollection.rejected, setError)
            .addCase(updateCollection.rejected, setError)
            .addCase(deleteCollection.rejected, setError)
    },
})

export default collectionSlice.reducer;
export const { addNewCollection, updateUserCollection, removeCollection } = collectionSlice.actions;