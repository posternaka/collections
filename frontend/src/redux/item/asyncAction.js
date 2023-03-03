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

export const getLastItems = createAsyncThunk(
    'item/getLastItems',
    async (_, { rejectWithValue }) => {
        try {
            const lastItems = await axios.get(`${itemUrl}/last`);

            if(!lastItems.statusText) {
                throw new Error('Server Error (GET LAST ITEMS)');
            }

            return lastItems.data;
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

export const getCountCollectionItems = createAsyncThunk(
    'item/getCountCollectionItems',
    async (_, { rejectWithValue }) => {
        try {
            const countItemsCollection = await axios.get(`${itemUrl}/count`);

            if(!countItemsCollection.statusText) {
                throw new Error('Server Error (GET COUNT ITEMS COLLECTION)');
            }

            console.log(countItemsCollection.data);
            return countItemsCollection.data;
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

export const itemSortBy = createAsyncThunk(
    'item/itemSortBy',
    async (params, { rejectWithValue, dispatch }) => {
        try {
            const sortBy = params.name ? `sortBy=${params.name}` : '';
            const order = params.order ? `order=${params.order}` : '' ;

            const result = await axios.get(`${itemUrl}/sort/${params.id}?${sortBy}&${order}`);

            if(!result.statusText) {
                throw new Error('Server Error (SORT BY ITEM)');
            }

            return result.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const itemFilterBy = createAsyncThunk(
    'item/itemFilterBy',
    async (params, { rejectWithValue, dispatch }) => {
        try {
            const filter = params.name ? `filter=${params.name}` : '';
            const value = params.value ? `value=${params.value}` : '' ;

            const result = await axios.get(`${itemUrl}/filter/${params.id}?${filter}&${value}`);

            if(!result.statusText) {
                throw new Error('Server Error (SORT BY ITEM)');
            }

            return result.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)