import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { updateItemTags, addNewTags } from './tagSlice';
import { tagUrl } from '../../types/url';

export const addTag = createAsyncThunk(
    'tag/addTag',
    async (body, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`${tagUrl}`, body);

            if(!response.statusText) {
                throw new Error('Server Error (POST)');
            }

            dispatch(addNewTags(body));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getItemTags = createAsyncThunk(
    'tag/getItemTags',
    async (id, { rejectWithValue }) => {
        try {
            const itemTags = await axios.get(`${tagUrl}/${id}`);

            if(!itemTags.statusText) {
                throw new Error('Server Error (GET ITEM TAGS)');
            }

            return itemTags.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getAllTags = createAsyncThunk(
    'tag/getAllTags',
    async (_, { rejectWithValue }) => {
        try {
            const allTags = await axios.get(`${tagUrl}`);

            if(!allTags.statusText) {
                throw new Error('Server Error (GET ALL TAGS)');
            }

            return allTags.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
    
export const updateTag = createAsyncThunk(
    'tag/updateTag',
    async (params, { rejectWithValue, dispatch }) => {
        console.log(params.body);
        try {
            const tags = await axios.patch(`${tagUrl}/${params.id}`, params.body);

            if(!tags.statusText) {
                throw new Error('Server Error (UPDATE ITEM TAGS)');
            }

            dispatch(updateItemTags(params));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
