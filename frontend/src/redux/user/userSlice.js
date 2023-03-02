import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp } from './asyncAction';
import { STATUS } from '../types/status';

const initialState = {
    user: {},
    status: null,
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signOut(state) {
            state.user = {};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.user = action.payload;
            })
            .addCase(signIn.rejected, (state, action) => {
                state.status = STATUS.ERROR;
                state.error = action.payload;
            })
            .addCase(signUp.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.user = action.payload;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.status = STATUS.ERROR;
                state.error = action.payload;
            })
    },
})

export default userSlice.reducer;
export const { signOut } = userSlice.actions;