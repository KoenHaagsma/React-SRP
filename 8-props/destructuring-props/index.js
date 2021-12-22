import React from 'react';
import { render } from 'react-dom';

function Button(props) {
    const { className, children } = props;

    return <button className={`${className}`}>{children}</button>;
}

const root = document.querySelector('#react-root');

render(<Button className="primary">Login</Button>, root);
