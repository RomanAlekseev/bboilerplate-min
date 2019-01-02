import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import {App} from './App/App';
//import {Organization} from './App/components/Organization';
import {Login} from './App/containers/Authorize';

/**
 * Каркас приложения с подключением Redux.
 */

ReactDOM.render(
    <Login/>,
    document.getElementById('app')
);
