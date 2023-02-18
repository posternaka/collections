import { collectionUrl } from '../types/url';
import axios from 'axios';

export const getCollection = async (id) => {
    try {
        const collections = await axios.get(`${collectionUrl}/${id}`);
        return collections.data;
    } catch (error) {
        console.log(error);
    }
}

export const createCollection = async (body) => {
    try {
        await axios.post(`${collectionUrl}`, body);
    } catch (error) {
        console.log(error);
    }
}

export const updateCollection = async (body) => {
    console.log(body);
    try {
        const collections = await axios.patch(`${collectionUrl}/${body.id}`, {
            collectionName: body.newName,
            theme: body.newTheme,
            description: body.newDesc
        });
        return collections.data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteCollection = async (id) => {
    try {
        await axios.delete(`${collectionUrl}/${id}`);
    } catch (error) {
        console.log(error);
    }
}