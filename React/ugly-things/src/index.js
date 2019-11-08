import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostProvider from './PostProvider'

ReactDOM.render(<PostProvider><App /></PostProvider>, document.getElementById('root'));