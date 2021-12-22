import React from 'react';
import { render } from 'react-dom';

function Button(props) {
    if (!props.size) {
        return <button className="btn-medium"></button>;
    } else {
        return <button className={`btn-${props.size}`}>Text here</button>;
    }
}

const root = document.querySelector('#react-root');
render(<Button size="small" />, root);
