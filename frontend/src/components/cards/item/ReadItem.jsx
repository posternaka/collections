import { useSelector, useDispatch } from 'react-redux';
import { Card, ListGroup, Container, Badge, Button } from 'react-bootstrap';
import { joinValue } from '../../../helpers/index';

import { deleteItem } from '../../../redux/item/asyncAction';
import { Link } from 'react-router-dom';

const ReadItem = ({ item, setIsEdit }) => {
  const dispatch = useDispatch();
  const collection = useSelector(state => state.collection.collection);
  const tag = useSelector(state => state.tag.itemTags);

  // console.log(tag);


  return (
    <Container>
      <Card className='mt-3'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <span className='fw-bold'>{item.nameItem}</span>
          <div className='d-flex gap-2'>
              <Button variant="outline-warning" size="sm" onClick={() => setIsEdit(true)} >
                  Edit 
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => dispatch(deleteItem(item.id))} >
                  Delete
              </Button>
          </div>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className='d-flex flex-column gap-2'>
            {/* {
              tag?.tags && 
                  <div className='d-flex gap-1 align-items-center'>
                    {
                      tag.tags?.map(it => (
                        <Badge pill bg="primary">
                          #{it}
                        </Badge>
                      ))
                    }
                  </div>
            } */}
            
            <Link to={`/item/${item.id}`} className='text-decoration-none text-reset'>
              {
                collection.settings && collection.settings.map((param, idx) => (
                    <div key={idx} className='d-flex gap-2'>
                      <span className='opacity-75 fw-bold'>{joinValue(param.name)}: </span>
                      <span>{item.params[param.name]}</span>
                    </div>
                ))
              }
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}

export default ReadItem;



// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Card, ListGroup, Container, Form, Badge, Button, Toast } from 'react-bootstrap';
// import { joinValue } from '../../../helpers/index';

// import { deleteItem, getFavorite, updateFavorite } from '../../../rest/item';

// const ReadItem = ({ username, item, sets, tags, setIsEdit }) => {
//   const { id, nameItem, params, favorite } = item;
//   const settings = JSON.parse(sets);
//   const [isHeart, setIsHeart] = useState(favorite.includes(username));

//   const tag = tags.length > 0 ? tags.find(it => +it.itemId === id)?.tags : '';

//   const comment = useSelector(state => state.comment);
//   const commentItem = comment.comments.filter(it => +it.itemId === id);
//   console.log(commentItem, id);

//   const checkLike = async () => {
//     const favorite = await getFavorite(id);

//     if(favorite.favorite.indexOf(username) === -1) {
//       const result = [...favorite.favorite, username];
//       setIsHeart(true);
//       return await updateFavorite(id, result);
//     } else {
//       const result = favorite.favorite.filter(it => it !== username);
//       setIsHeart(false);
//       return await updateFavorite(id, result);
//     }
//   }

//   return (
//     <Container>
//       <Card className='mt-3'>
//         <Card.Header className='d-flex justify-content-between align-items-center'>
//           <span className='fw-bold'>{nameItem}</span>
//           {
//             isHeart
//               ? <span role="button" className="lead" onClick={() => checkLike()}>&#10084;</span>
//               : <span role="button" className="lead" onClick={() => checkLike()}>&#129293;</span>
//           }
//           <div className='d-flex gap-2'>
//               <Button variant="outline-warning" size="sm" onClick={() => setIsEdit(true)} >
//                   Edit 
//               </Button>
//               <Button variant="outline-danger" size="sm" onClick={() => deleteItem(id)}>
//                   Delete
//               </Button>
//           </div>
//         </Card.Header>
//         <ListGroup variant="flush">
//           <ListGroup.Item className='d-flex flex-column gap-2'>
//             <div className='d-flex gap-1 align-items-center'>
//               {
//                 tag.length > 0
//                   ? tag.map(it => (
//                     <Badge pill bg="primary">
//                       #{it}
//                     </Badge>
//                   ))
//                   : []
//               }
//             </div>
//             {
//               settings.map((it) => (
//                 <div className='d-flex gap-2'>
//                   <span className='opacity-75 fw-bold'>{joinValue(it.name)}: </span>
//                   <span>{params[it.name]}</span>
//                 </div>
//               ))
//             }
//           </ListGroup.Item>
//           <ListGroup.Item>
//             {
//               commentItem &&
//                 commentItem.map(it => (
//                   <>
//                     <Toast.Header closeButton={false}>
//                       <img
//                         src="https://via.placeholder.com/20/09f.png/000"
//                         className="rounded me-2"
//                         alt=""
//                       />
//                       <strong className="me-auto">Nikita</strong>
//                       <small>11 mins ago</small>
//                     </Toast.Header>
//                     <Toast.Body>I really like your idea. Sounds cool.</Toast.Body>
//                   </>
//                 ))
//             }
//           </ListGroup.Item>
//         </ListGroup>
//       </Card>
//     </Container>
//   )
// }

// export default ReadItem;