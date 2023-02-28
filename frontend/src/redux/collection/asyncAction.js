import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { collectionUrl } from "../../types/url";
import { addNewCollection, updateUserCollection, removeCollection } from './collectionSlice';

export const addCollection = createAsyncThunk(
    'comment/addCollection',
    async (body, { rejectWithValue, dispatch }) => {
        try {
            const collection = await axios.post(`${collectionUrl}`, body);

            if(!collection.statusText) {
                throw new Error('Server Error (POST)');
            }

            dispatch(addNewCollection(collection.data));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getUserCollections = createAsyncThunk(
    'collection/getUserCollections',
    async (id, { rejectWithValue }) => {
        try {
            const userCollections = await axios.get(`${collectionUrl}/user/${id}`);

            if(!userCollections.statusText) {
                throw new Error('Server Error (GET)');
            }

            return userCollections.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getAllCollections = createAsyncThunk(
    'collection/getAllCollections',
    async (_, { rejectWithValue }) => {
        try {
            const collections = await axios.get(`${collectionUrl}`);

            if(!collections.statusText) {
                throw new Error('Server Error (GET)');
            }

            return collections.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getCollection = createAsyncThunk(
    'collection/getCollectionSettings',
    async (id, { rejectWithValue }) => {
        try {
            const collection = await axios.get(`${collectionUrl}/${id}`);

            if(!collection.statusText) {
                throw new Error('Server Error (GET COLLECTION ITEMS)');
            }

            return collection.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const updateCollection = createAsyncThunk(
    'comment/updateCollection',
    async (params, { rejectWithValue, dispatch }) => {
        try {
            const collection = await axios.patch(`${collectionUrl}/${+params.id}`, params.body);

            if(!collection.statusText) {
                throw new Error('Server Error (POST)');
            }

            dispatch(updateUserCollection(params));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteCollection = createAsyncThunk(
    'collection/deleteCollection',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const collection = await axios.delete(`${collectionUrl}/${id}`);

            if(!collection.statusText) {
                throw new Error('Server Error (DELETE)');
            }

            dispatch(removeCollection(id));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)