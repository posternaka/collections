import { createSlice } from '@reduxjs/toolkit';
import { addCollection, getUserCollections, getAllCollections, getCollection, updateCollection, deleteCollection } from './asyncAction';
import { STATUS } from '../types/status';
import { THEMES, TYPES } from '../../types/theme';

const initialState = {
    updateCollection: {
        collectionName: '',
        theme: THEMES[0],
        description: '',
        optionName: '',
        optionType: TYPES[0],
        settingsCollection: [],
    },
    userCollections: [],
    allCollections: [],
    collection: {},
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
        setCollectionName (state, action) {
            state.updateCollection.collectionName = action.payload;
        },
        setCollectionTheme (state, action) {
            state.updateCollection.theme = action.payload;
        },
        setCollectionDesc (state, action) {
            state.updateCollection.description = action.payload;
        },
        setCollectionSettings (state, action) {
            state.updateCollection.settingsCollection.push(action.payload);
        },
        resetCollectionSettings (state) {
            state.updateCollection.settingsCollection = [];
        },
        setOptionName (state, action) {
            state.updateCollection.optionName = action.payload;
        },
        setOptionType (state, action) {
            state.updateCollection.optionType = action.payload;
        },
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
            .addCase(getCollection.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getCollection.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.collection = action.payload;
            })
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
export const { setCollectionName, setCollectionTheme, setCollectionDesc, setCollectionSettings, resetCollectionSettings, setOptionName, setOptionType, addNewCollection, updateUserCollection, removeCollection } = collectionSlice.actions;