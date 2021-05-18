import React,{useContext} from 'react';
import {BookContext} from '../Context/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
const { books } = useContext(BookContext);
    return books.length?(
        <div>
            <ul>
               {books.map(book =>{
return(
    <BookDetails book={book} key={book.id}/>
)
               })} 
            </ul>
        </div>

    ):(
        <div>
            no books to read
            </div>
    )
}

export default BookList;

