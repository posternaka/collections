import { commentUrl } from '../types/url';
import axios from 'axios';

export const createComment = async (body) => {
    try {
        return await axios.post('commentUrl', body)
    } catch (error) {
        console.log(error);
    }
}

export const getComment = async (id) => {
    try {
        const comments = await axios.get(`${commentUrl}/${id}`);
        return comments.data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteComment = async (id) => {
    try {
        return await axios.delete(`${commentUrl}/${id}`);
    } catch (error) {
        console.log(error);
    }
}