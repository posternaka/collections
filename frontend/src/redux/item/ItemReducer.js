import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    fields: {}
};

export const setFields = createAction('SET_FIELDS');

export default createReducer(initialState, {
    [setFields]: function (state) {

    }
});