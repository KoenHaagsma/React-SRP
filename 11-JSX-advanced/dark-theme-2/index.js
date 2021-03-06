import React from 'react';
import { render } from 'react-dom';
import clsx from 'clsx';

function Navbar(props) {
    const className = clsx({ navbar: true, light: props.theme === 'light', dark: props.theme === 'dark' });
    return <h1 className={className}>Online supermarket</h1>;
}

const root = document.querySelector('#react-root');

render(
    <>
        <Navbar theme="light" />
        <Navbar theme="dark" />
    </>,
    root,
);
