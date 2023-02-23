import { itemUrl } from '../types/url';
import axios from 'axios';

export const getItems = async (id) => {
    try {
        const items = await axios.get(`${itemUrl}/all/${id}`);
        return items.data;
    } catch (error) {
        console.log(error);
    }
}

export const getItem = async (id) => {
    try {
        const item = await axios.get(`${itemUrl}/${id}`);
        return item.data;
    } catch (error) {
        console.log(error);
    }
}

export const createItem = async (body) => {
    try {
        const item = await axios.post(`${itemUrl}`, body);
        return item.data;
    } catch (error) {
        console.log(error);
    }
}

export const updateItem = async (body) => {
    try {
        return await axios.patch(`${itemUrl}/${body.id}`, {
            name: body.name,
            params: body.params,
        });
    } catch (error) {
        console.log(error);
    }
}

export const deleteItem = async (id) => {
    try {
        await axios.delete(`${itemUrl}/${id}`);
    } catch (error) {
        console.log(error);
    }
}