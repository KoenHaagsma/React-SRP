import React from 'react';
import { render } from 'react-dom';
import Link from './Link.js';
import Button from './Button.js';

function App() {
    return (
        <>
            <Button />
            <Button />
            <Link />
        </>
    );
}

// Sample usage (do not modify)
render(<App />, document.querySelector('#react-root'));
