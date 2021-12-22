import React from 'react';
import { render } from 'react-dom';

function Navbar(props) {
    if (props.theme === 'light') {
        return <h1 className="light">Online supermarket</h1>;
    } else if (props.theme === 'dark') {
        return <h1 className="dark">Online supermarket</h1>;
    } else {
        return null;
    }
}

const root = document.querySelector('#react-root');

render(
    <>
        <Navbar theme="light" />
        <Navbar theme="dark" />
    </>,
    root,
);
