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



// const dispatch = useDispatch();
// const tag = useSelector(state => state.tag);

// console.log(tag);

// useEffect(()=> {
//   dispatch(getItemTags('1'));
//   dispatch(getAllTags());
// }, [])


// useEffect(() => {
// }, []);

// return (
//   <Container>
//     <Row className='mt-5'>
//       <Col sm={2}>Filter</Col>
//       <Col sm={10}>
//         <h2>Hello, {user?.username} </h2>
//         <button onClick={() => dispatch(createTags('uyiuoip'))}>add tag in redux</button>
//         <button onClick={() => dispatch(addTag({itemId: '2', tags: tag.createTag}))}>create tag</button>
//         <button onClick={() => dispatch(updateTag({ id: '1', body: ["adsferg", "erernth", "xbvmnb"]}))}>update tag</button>
//       </Col>
//     </Row>
//   </Container>
// );