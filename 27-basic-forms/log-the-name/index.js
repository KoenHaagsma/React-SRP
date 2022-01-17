import React from 'react';
import { render } from 'react-dom';

function Checkout(props) {
    return (
        <form>
            <input type="text" name="name" onChange={(event) => console.log(event.target.value)} />
        </form>
    );
}

render(<Checkout />, document.querySelector('#react-root'));
