import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailsBook from "./components/DetailsBook/DetailsBook";
import ScrollToTop from "./components/ScrollToTop";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/book/:id" element={<DetailsBook/>}/>
                    <Route
                        path="*"
                        element={
                            <main style={{padding: "1rem"}}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


