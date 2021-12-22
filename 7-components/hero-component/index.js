import React from 'react';
import { render } from 'react-dom';

function Hero() {
    return (
        <>
            <h1>Welcome to our supermarket</h1>
            <p>Start shopping</p>
        </>
    );
}

// do not modify
render(<Hero></Hero>, document.querySelector('#react-root'));
