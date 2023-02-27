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

export const getItems = createAsyncThunk(
    'item/getItems',
    async (id, { rejectWithValue }) => {
        try {
            const items = await axios.get(`${itemUrl}/all/${id}`);

            if(!items.statusText) {
                throw new Error('Server Error (GET ITEMS)');
            }

            return items.data;
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

            dispatch(updateCollectionItem(params.body));
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