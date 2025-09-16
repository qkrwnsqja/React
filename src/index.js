import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from "./chp03/Library";
import './chp03/Book.css'
import ConfirmDialog from "./chp04/ConfirmDialog";
import './chp04/Button.css'
import  './chp04/ConfirmDialog.css'
import ConfirmDialogs from "./chp04/ConfirmDialogs";
import Clock from "./chp04/Clock";
import './chp04/clock.css'
import Comment from "./chp05/exam01/Comment";
import BookList from "./chp05/exam02/BookList";
import CommentList from "./chp05/CommentList";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <CommentList />
    </React.StrictMode>
);

// setInterval(()=>{
//     root.render(
//         <React.StrictMode>
//             <Clock />
//         </React.StrictMode>
//     );
// }, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
