import React from 'react';
import { render } from 'react-dom';

function Navbar() {
    return (
        <select onChange={() => console.log('Country changed')} className="countries">
            <option>Netherlands</option>
            <option>Belgium</option>
            <option>France</option>
        </select>
    );
}

render(<Navbar />, document.querySelector('#react-root'));
