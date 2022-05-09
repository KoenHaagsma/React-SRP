import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function Stopwatch() {
    const [counter, setCounter] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (running) {
            const timerId = setTimeout(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);
            return () => {
                clearTimeout(timerId);
            };
        }
    });

    function handleButtonClickPause() {
        setRunning((prevValue) => !prevValue);
    }

    function handleButtonClickStop() {
        setRunning(false);
        setCounter(0);
    }

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={handleButtonClickPause}>Start / Pause</button>
            <button onClick={handleButtonClickStop}>Stop</button>
        </>
    );
}

render(<Stopwatch />, document.querySelector('#react-root'));
