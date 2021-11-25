import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
//import App from './App';
import { SkillBlockLayout } from './components/SkillBlockLayout';
import registerServiceWorker from './registerServiceWorker';

import './custom.css'

/*const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');*/
const rootElement = document.getElementById('root');
/*const myElement = document.getElementById('myElement');*/

//ReactDOM.render(
//  <BrowserRouter basename={baseUrl}>
//    <App />
//  </BrowserRouter>,
//  rootElement);
ReactDOM.render(
    <SkillBlockLayout />,
    rootElement);


registerServiceWorker();

