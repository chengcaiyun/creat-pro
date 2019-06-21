import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入通用样式文件
import "./stylesheets/main.scss"

//引入post.js文件
//import "./modules/post"
import "./modules/axios-utils"

//使用rem.js
import "./modules/rem.js"
//在这使用HashRouter时可以起个别名
import {HashRouter as Router} from "react-router-dom"
ReactDOM.render(
    <Router>
        <App />
    </Router> , document.getElementById('root'));

