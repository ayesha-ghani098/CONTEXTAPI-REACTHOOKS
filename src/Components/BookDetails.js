import React,{useContext} from 'react';
import { BookContext } from '../Context/BookContext';


const BookDetails = ({book}) => {
  const { dispatch } = useContext(BookContext);

    return (
      <div>
        <li onClick={()=> dispatch({type:'REMOVE_BOOK',id:book.id})}>
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
        </li>
      </div>
    );
}

export default BookDetails;