import React from 'react';
import { render } from 'react-dom';

function handleButtonClick() {
    console.log('Button clicked');
}

function Counter() {
    return <button onClick={handleButtonClick}>Add 1</button>;
}

render(<Counter />, document.querySelector('#react-root'));
