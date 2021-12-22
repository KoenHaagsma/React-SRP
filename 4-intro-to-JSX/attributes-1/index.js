import React from 'react';
import { render } from 'react-dom';

const root = document.querySelector('#react-root');
render(
    <p className="selected" id="promo">
        Hello World
    </p>,
    root,
);
