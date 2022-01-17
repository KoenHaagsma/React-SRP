import React, { useState } from 'react';
import { render } from 'react-dom';

function App() {
    const [settings, setSettings] = useState({
        title: 'Content here',
        dark_theme: true,
    });

    const className = settings.dark_theme ? 'dark' : 'light';
    function handleClick() {
        setSettings({
            ...settings,
            dark_theme: !settings.dark_theme,
        });
    }

    return (
        <div className={className}>
            <h1>{settings.title}</h1>
            <button onClick={handleClick}>Toggle theme</button>
        </div>
    );
}

render(<App />, document.querySelector('#react-root'));
