import { createSlice } from '@reduxjs/toolkit';
import { getUsers, updateStatus, deleteUser } from './asyncAction';
import { STATUS } from '../types/status';

const initialState = {
    users: [],
    status: STATUS.LOADING,
    error: null
};

const setError = (state, action) => {
    state.status = STATUS.ERROR;
    state.error = action.payload;
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        updateUser(state, action) {
            const user = state.users.find(user => user.id === action.payload.id);
            user.status = action.payload.status;
        },
        removeUser(state, action) {
            const result = new Set(action.payload.data);
            state.users.filter(user => !result.has(user));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.users = action.payload;
            })
            .addCase(updateStatus.rejected, setError)
            .addCase(deleteUser.rejected, setError)
            .addCase(getUsers.rejected, setError)
    },
})

export default adminSlice.reducer;
export const { updateUser, removeUser } = adminSlice.actions;