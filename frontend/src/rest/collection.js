import { collectionUrl } from '../types/url';
import axios from 'axios';

export const getCollections = async (id) => {
    try {
        const collections = await axios.get(`${collectionUrl}/${id}`);
        return collections.data;
    } catch (error) {
        console.log(error);
    }
}

export const getCollection = async (id) => {
    try {
        const collection = await axios.get(`${collectionUrl}/${id}`);
        return collection.data;
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
    try {
        return await axios.patch(`${collectionUrl}/${body.id}`, {
            collectionName: body.newName,
            theme: body.newTheme,
            description: body.newDesc,
            settings: body.newSettings
        });
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



// const dispatch = useDispatch();
//   const collections = useSelector(state => state.collection);
//   console.log(collections);

//   useEffect(() => {
//     dispatch(getUserCollections('1'));
//     dispatch(getAllCollections());
//   }, [])

//   const body = {
//     idUser : 1,
//     image: "img",
//     collectionName: "football",
//     theme : "Sport",
//     description : "descCollection",
//     settings : [{"name": "wqef", "type": "text", "orders": 1}, {"name": "erwg", "type": "number", "orders": 2}]
//   }

//   const params = {
//     id: '15',
//     body: {
//       collectionName: 'qweqwe',
//       theme: 'qweqwe',
//       description: 'my qweqwe',
//       settings: [{"name": "qweqwe", "type": "text", "orders": 1}, {"name": "qweqwe", "type": "number", "orders": 2}],
//     }
//   }

//   return (
//     <Container>
//       <Row className='mt-5'>
//         <Col sm={2}>Filter</Col>
//         <Col sm={10}>
//           <h2>Hello, {user?.username} </h2>
//           <button onClick={() => dispatch(deleteCollection('15'))}>DELETE</button>
//           <button onClick={() => dispatch(addCollection(body))}>ADD</button>
//           <button onClick={() => dispatch(updateCollection(params))}>UPDATE</button>
//         </Col>
//       </Row>
//     </Container>
//   );