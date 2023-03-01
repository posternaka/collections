import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { addTag } from './tagSlice';
import { tagUrl } from '../../types/url';

export const createTag = createAsyncThunk(
    'tag/createTag',
    async (body, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(tagUrl, body);

            if(!response.statusText) {
                throw new Error('Server Error (POST)');
            }

            dispatch(addTag(response.data));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getTags = createAsyncThunk(
    'tag/getAllTags',
    async (_, { rejectWithValue }) => {
        try {
            const tags = await axios.get(tagUrl);

            if(!tags.statusText) {
                throw new Error('Server Error (GET ALL TAGS)');
            }
            return tags.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
)
