import { tagUrl } from '../types/url';
import axios from 'axios';

export const createTag = async (body) => {
    try {
        await axios.post(tagUrl, body);
    } catch (error) {
        console.log(error);
    }
}

export const getItemTags = async (itemId) => {
    try {
        const tags = await axios.get(`${tagUrl}/item/${itemId}`);
        return tags.data;
    } catch (error) {
        console.log(error);
    }
}

export const getCollectionTags = async (collectionId) => {
    try {
        const tags = await axios.get(`${tagUrl}/collection/${collectionId}`);
        return tags.data;
    } catch (error) {
        console.log(error);
    }
}

export const getAllTags = async () => {
    try {
        const tags = await axios.get(`${tagUrl}`);
        return tags.data;
    } catch (error) {
        console.log(error);
    }
}

export const updateTag = async (id, body) => {
    try {
        await axios.patch(`${tagUrl}/${id}`, body);
    } catch (error) {
        console.log(error);
    }
}