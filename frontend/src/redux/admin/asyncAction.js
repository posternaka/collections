import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { updateUser, removeUser } from './adminSlice';
import { adminURL } from '../../types/url';

export const getUsers = createAsyncThunk(
    'admin/getUsers',
    async (token, { rejectWithValue }) => {
        try {
            const users = await axios.get(`${adminURL}/users`, { headers: { "Authorization" : `Bearer ${ token }` }});

            if(!users.statusText) {
                throw new Error('Server Error (POST)');
            }
            
            return users.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const updateStatus = createAsyncThunk(
    'admin/updateStatus',
    async (params, { rejectWithValue, dispatch }) => {
        try {
            const users = await axios.patch(`${adminURL}/users`, params);

            if(!users.statusText) {
                throw new Error('Server Error (POST)');
            }
            
            dispatch(updateUser({ id: params.id, status: params.status }));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteUser = createAsyncThunk(
    'admin/deleteUser',
    async (body, { rejectWithValue, dispatch }) => {
        try {
            const user = await axios.delete(`${adminURL}/users`, body);

            if(!user.statusText) {
                throw new Error('Server Error (POST)');
            }
            
            dispatch(removeUser(body));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)