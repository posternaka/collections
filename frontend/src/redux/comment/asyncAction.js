import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { commentUrl } from '../../types/url';
import { addNewComment, removeComment } from './commentSlice';

export const addComment = createAsyncThunk(
    'comment/addComment',
    async (body, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`${commentUrl}`, body);

            if(!response.ok) {
                throw new Error('Server Error (POST)');
            }

            dispatch(addNewComment(response.data));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getComments = createAsyncThunk(
    'comment/getComments',
    async (_, { rejectWithValue }) => {
        try {
            const comments = await axios.get(commentUrl);

            if(!comments.statusText) {
                throw new Error('Server Error (GET)');
            }

            return comments.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteComment = createAsyncThunk(
    'comment/deleteComment',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const comments = await axios.delete(`${commentUrl}/${id}`);

            if(!comments.ok) {
                throw new Error('Server Error (DELETE)');
            }

            dispatch(removeComment(id));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)