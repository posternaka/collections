import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCollectionItems } from '../redux/item/asyncAction';
import { getCollection } from '../redux/collection/asyncAction';
import { itemSortBy, itemFilterBy } from '../redux/item/asyncAction';

import ItemCard from '../components/cards/item/ItemCard';
import DropdownItemTagsExample from '../components/UI/dropdown/Dropdown';

const Collection = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const items = useSelector(state => state.item.collectionItems);
    
    const paramsSort = items[0]?.params && ['nameItem', ...Object.keys(items[0].params)].reduce((acc, it) => {
        if(it === 'nameItem') {
            acc.push({ name: 'Name ↑', type: it, value: 'asc' });
            acc.push({ name: 'Name ↓', type: it, value: 'desc' });
        } else {
            acc.push({ name: `${it[0].toUpperCase()}${it.slice(1)} ↑`, type: `params.${it}`, value: 'asc'});
            acc.push({ name: `${it[0].toUpperCase()}${it.slice(1)} ↓`, type: `params.${it}`, value: 'desc'});
        }
        return acc
    }, []);

    const paramsFilter = items[0]?.params && Object.entries(items[0].params).reduce((acc, [key, value]) => {
        acc.push({ name: `${value[0].toUpperCase()}${value.slice(1)}`, type: `params.${key}`, value })
        return acc;
    }, []);

    // console.log(Object.entries(items[0].params));
    // console.log(Object.values(items).reduce((acc, it) => {
    //     const r = [...Object.values(it.params)];
    //     acc.push(r)
    //     return acc
    // }, []));
    
    useEffect(() => {
        dispatch(getCollectionItems(id));
        dispatch(getCollection(id));
    }, []);

    const handleSorting = (type, order) => {
        dispatch(itemSortBy({ id, name: type, order }))
    }

    const handleFilter = (type, value) => {
        dispatch(itemFilterBy({ id, name: type, value }))
    }

    return (
        <Container>
            {
                
            }
            <Link to='/add_item' className='my-3 text-decoration-none d-flex flex-column justify-content-center align-items-center'>
                <span className='display-1'>+</span>
                <p>add new item</p>
            </Link>
            <div className='d-flex gap-3 justify-content-center'>
                <DropdownItemTagsExample title='Sorting' params={paramsSort} onClick={handleSorting} />
                <DropdownItemTagsExample title='Filter' params={paramsFilter} onClick={handleFilter} />
            </div>
                {
                    items.map(item => (
                        <ItemCard key={item.id} item={item} />
                    ))
                }
        </Container>
    )
}

export default Collection;