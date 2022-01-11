import React, { useState } from 'react';
import { render } from 'react-dom';

function Counter() {
    const [counter, setCounter] = useState(0);

    function handleButtonClick() {
        setCounter(counter + 1);
    }

    return (
        <>
            <h2>{counter} times clicked</h2>
            <button onClick={handleButtonClick}>Add 1</button>
        </>
    );
}

render(<Counter />, document.querySelector('#react-root'));
