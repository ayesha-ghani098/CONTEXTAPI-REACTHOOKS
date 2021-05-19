import React,{useContext,useState} from 'react';
import { BookContext } from '../Context/BookContext';


const NewBookForm = () => {
  // const { addBook }= useContext(BookContext);

  const { dispatch }= useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
 dispatch(
   {type:'ADD_BOOK',book:{
     title,author
   }}
 )
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        required
        type="text"
        placeholder="Enter Book Name"
        value={title}
      />
      <br />
      <br />
      <input
        onChange={(e) => setAuthor(e.target.value)}
        required
        type="text"
        placeholder="Enter Author Name"
        value={author}
      />
      <br />
      <br />
      <input type="submit" value="Add Book" />
      <br />
    </form>
  );
}

export default NewBookForm