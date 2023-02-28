import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { addNewTags } from './tagSlice';
import { tagUrl } from '../../types/url';

export const createTag = createAsyncThunk(
    'tag/createTag',
    async (body, { rejectWithValue }) => {
        try {
            const response = await axios.post(tagUrl, body);

            console.log(body);

            if(!response.statusText) {
                throw new Error('Server Error (POST)');
            }


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
            const allTags = await axios.get(tagUrl);

            if(!allTags.statusText) {
                throw new Error('Server Error (GET ALL TAGS)');
            }

            return allTags.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
    
export const addTag = createAsyncThunk(
    'tag/updateTag',
    async (params, { rejectWithValue, dispatch }) => {
        try {
            const tags = await axios.patch(`${tagUrl}/${params.id}`, params.body);

            if(!tags.statusText) {
                throw new Error('Server Error (UPDATE ITEM TAGS)');
            }

            dispatch(addNewTags(params.body));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
