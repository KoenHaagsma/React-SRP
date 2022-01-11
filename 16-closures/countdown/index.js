import React, { useState } from 'react';
import { render } from 'react-dom';

function Countdown() {
    const [counter, setCounter] = useState(10);

    function handleButtonClick() {
        setCounter(counter - 1);
    }

    return (
        <>
            <h2>{counter} times remaining</h2>
            <button onClick={handleButtonClick}>Countdown</button>
        </>
    );
}

render(<Countdown />, document.querySelector('#react-root'));
