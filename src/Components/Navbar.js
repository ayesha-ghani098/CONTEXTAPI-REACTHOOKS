import React,{useContext} from 'react';
import { BookContext } from '../Context/BookContext';
import './../../src/index.css'


const Navbar = () => {
    const books = useContext(BookContext);
    return(
<div className="navbar">
<h1>
    Reading Books List
</h1>
</div>
    )
}

export default Navbar;