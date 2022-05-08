import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

function App() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = 'Welcome';
        const timeout = setTimeout(() => {
            document.title = 'Still there?';
        }, 1000);

        return function cleanUpTimeout() {
            clearTimeout(timeout);
        };
    });

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Add</button>
        </>
    );
}

render(<App />, document.querySelector('#react-root'));
