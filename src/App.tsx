import React from 'react';
import './App.css';
import Search from "./components/Search/Search";
import BookList from "./components/BooksList/BookList";

function App() {
    return (
        <div className="App">
                        <Search/>
                        <BookList/>
        </div>
    );
}

export default App;
