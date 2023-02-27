// import { useState, useEffect } from 'react';
// import { Card, ListGroup, Container, Form, Badge, Button } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateItem } from '../../../rest/item';
// import { getItemTags, updateTag } from '../../../rest/tag';
// import { setTag } from '../../../redux/tag/tagSlice';
// import { setFields } from '../../../redux/item/ItemSlice';

// const EditItem = ({ item, sets, tags, setIsEdit }) => {
//   const { id, nameItem, params } = item;
//   const jsonSettings = JSON.parse(sets)
//   const dispatch = useDispatch();
//   const tag = useSelector(state => state.tag.tag);
//   const fields = useSelector(state => state.item.fields);
//   const [newName, setNewName] = useState(nameItem);
//   const [nameTag, setNameTag] = useState('');


//   console.log(fields);

//   useEffect(() => {
//     getDataItemTags(id);
//   }, [])

//   const getDataItemTags = async (id) => {
//     const tag = await getItemTags(id);
//     dispatch(setTag(tag.tags));
//   }

//   const updateTagDB = async () => {
//     await updateTag(id, { tags: [...tag, nameTag]});
//     setNameTag('');
//   }


//   const handleUpdateItem = async () => {
//     await updateItem({ id, name: newName, params: fields })
//   }


//   return (
//     <Container>
//       <Card className='mt-3'>
//         <Card.Header className='d-flex justify-content-between align-items-center'>
//           <Form.Control
//               className='w-25'
//               type="text"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//           />
//           <div className='d-flex gap-2'>
//               <Button variant="outline-warning" size="sm" onClick={() => handleUpdateItem()} >
//                   Save 
//               </Button>
//           </div>
//         </Card.Header>
//         <ListGroup variant="flush">
//           <ListGroup.Item className='d-flex flex-column gap-2'>
//             <div className='d-flex gap-1 align-items-center'>
//               {
//                 tag.map(it => (
//                   <Badge pill bg="primary">
//                     #{it}
//                   </Badge>
//                 ))
//               }
//             </div>
//             <div className='d-flex gap-2'>
//               <Form.Control className='w-25' type="text" placeholder="add tag" value={nameTag} onChange={(e) => setNameTag(e.target.value)} />
//               <Button onClick={() => updateTagDB()}>+</Button>
//             </div>
//                 {
//                   jsonSettings.map(it => (
//                     <div className='d-flex gap-2 align-items-center'>
//                       <span className='opacity-75 fw-bold'>{ it.name }: </span>
//                       <Form.Control 
//                         className='w-25' 
//                         type={ it.type } 
//                         placeholder={`add ${ it.name }`} 
//                         onChange={(e) => dispatch(setFields({ name: it.name, value: e.target.value }))} 
//                       />
//                     </div>
//                   ))
//                 }
//           </ListGroup.Item>
//         </ListGroup>
//       </Card>
//     </Container>
//   )
// }

// export default EditItem

