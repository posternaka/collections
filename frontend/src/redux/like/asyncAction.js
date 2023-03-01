import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { likeUrl } from '../../types/url';
import { updateUserLike, createUserLike } from './likeSlice';

export const createLike = createAsyncThunk(
    'like/createLike',
    async (body, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`${likeUrl}`, body);

            if(!response.statusText) {
                throw new Error('Server Error (POST)');
            }

            dispatch(createUserLike(response.data));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getLike = createAsyncThunk(
    'like/getLike',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${likeUrl}/${id}`);

            if(!response.statusText) {
                throw new Error('Server Error (GET)');
            }

            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const updateLike = createAsyncThunk(
    'like/updateLike',
    async (params, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.patch(`${likeUrl}/${params.userId}`, params.body);

            if(!response.statusText) {
                throw new Error('Server Error (PATCH)');
            }

            dispatch(updateUserLike(params.body));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)