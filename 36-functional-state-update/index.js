import React, { useState } from 'react';
import { render } from 'react-dom';

function Counter() {
    const [counter, setCounter] = useState(0);

    function handleIncrementClick() {
        setCounter((prevcounter) => prevcounter + 1);
    }

    function handleDecrementClick() {
        setCounter((prevcounter) => prevcounter - 1);
    }

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={handleIncrementClick}>+</button>
            <button onClick={handleDecrementClick}>-</button>
        </>
    );
}

render(<Counter />, document.querySelector('#react-root'));
