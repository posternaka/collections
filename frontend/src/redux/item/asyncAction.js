import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { itemUrl } from '../../types/url';
import { addNewItem, updateCollectionItem, removeItem } from './itemSlice';

export const addItem = createAsyncThunk(
    'item/addItem',
    async (body, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`${itemUrl}`, body);

            if(!response.statusText) {
                throw new Error('Server Error (POST)');
            }

            dispatch(addNewItem(response.data));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getAllItems = createAsyncThunk(
    'item/getAllItems',
    async (id, { rejectWithValue }) => {
        try {
            const allItems = await axios.get(`${itemUrl}`);

            if(!allItems.statusText) {
                throw new Error('Server Error (GET ALL ITEMS)');
            }

            return allItems.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getCollectionItems = createAsyncThunk(
    'item/getCollectionItems',
    async (id, { rejectWithValue }) => {
        try {
            const collectionItems = await axios.get(`${itemUrl}/collection/${id}`);

            if(!collectionItems.statusText) {
                throw new Error('Server Error (GET COLLECTION ITEMS)');
            }

            return collectionItems.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getItem = createAsyncThunk(
    'item/getItem',
    async (id, { rejectWithValue }) => {
        try {
            const item = await axios.get(`${itemUrl}/${id}`);

            if(!item.statusText) {
                throw new Error('Server Error (GET ITEM)');
            }

            return item.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const updateItem = createAsyncThunk(
    'item/updateItem',
    async (params, { rejectWithValue, dispatch }) => {
        try {
            const item = await axios.patch(`${itemUrl}/${params.id}`, params.body);

            if(!item.statusText) {
                throw new Error('Server Error (PATCH ITEM)');
            }

            dispatch(updateCollectionItem(params));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteItem = createAsyncThunk(
    'item/removeItem',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const item = await axios.delete(`${itemUrl}/${id}`);

            if(!item.statusText) {
                throw new Error('Server Error (DELETE ITEM)');
            }

            dispatch(removeItem(id));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)