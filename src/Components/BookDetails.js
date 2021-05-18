import React,{useContext} from 'react';
import { BookContext } from '../Context/BookContext';


const BookDetails = ({book}) => {
  const { removeBook } = useContext(BookContext);

    return (
      <div>
        <li onClick={()=>removeBook(book.id)}>
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
        </li>
      </div>
    );
}

export default BookDetails;