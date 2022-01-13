import React from 'react';
import { render } from 'react-dom';

function Apps(props) {
    const items = props.items;

    return (
        <ul>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

// Sample usage (do not modify)
const apps = ['Calculator', 'Phone', 'Messages', 'Maps'];
render(<Apps items={apps} />, document.querySelector('#react-root'));
