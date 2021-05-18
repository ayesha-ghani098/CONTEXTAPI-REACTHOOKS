import './index.css';
import Navbar from './Components/Navbar';
import BookContextProvider from './Context/BookContext';
import BookList from './Components/BookList';
import NewBookForm from './Components/BookForm';

const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList/>
        <NewBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
