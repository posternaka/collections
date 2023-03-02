import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { authURL } from '../../types/url';

export const signIn = createAsyncThunk(
    'user/signIn',
    async (body, { rejectWithValue }) => {
        try {
            const user = await axios.post(`${authURL}/signin`, body);

            if(!user.statusText) {
                throw new Error('Server Error (GET USER)');
            }
            
            return user.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const signUp = createAsyncThunk(
    'user/signUp',
    async (body, { rejectWithValue, dispatch }) => {
        try {
            const user = await axios.post(`${authURL}/signup`, body);

            if(!user.statusText) {
                throw new Error('Server Error (CREATE USER)');
            }

            return user.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)