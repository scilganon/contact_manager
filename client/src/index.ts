import * as ReactDOM  from 'react-dom';
import { AppLayout } from './Components/Router';

import "../styles/index.css";

let root = document.querySelector('#root');

if(!root) {
    root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
}

ReactDOM.render(AppLayout, root);
