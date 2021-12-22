import React from 'react';
import { render } from 'react-dom';

const root = document.querySelector('#react-root');
const element = React.createElement('h1', {}, 'Online Supermarket');

render(element, root);
