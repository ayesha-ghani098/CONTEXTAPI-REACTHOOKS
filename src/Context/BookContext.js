import React,{createContext,useReducer} from 'react';

// Random id 
import uuid from 'uuid/dist/v1';
import { bookReducer } from '../Reducers/BookReducer';

//Context
export const BookContext = createContext();
// export const BookActionContext = createContext();


// Reducer

//Context Provider
const BookContextProvider = props => {


  
  // const [books, setBooks] = useState([
  //   {
  //     title: "Jannat ke Pattay",
  //     author: "Nimra Ahmed",
  //     id: 1,
  //   },
  //   {
  //     title: "AAb e Hayat",
  //     author: "Nimra Ahmed",
  //     id: 2,
  //   },
  // ]);

  // With useReducer
  const [books, dispatch] = useReducer(bookReducer,[]);

  // ------Without Reducer------ //

  //Function to add books
  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuid() }]);
  // };

  //Function to remove books
  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };

  return (
    // <BookContext.Provider value={{ books, addBook, removeBook }}>
    //   {props.children}
    // </BookContext.Provider>

    // ------Without Reducer------ //

    // With useReducer
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;