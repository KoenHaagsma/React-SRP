import React from 'react';
import { render } from 'react-dom';

function Dashboard(props) {
    return props.loggedIn ? (
        <div className="container">
            <h1>Welcome back!</h1>
        </div>
    ) : (
        <div className="container">
            <h1>Welcome.</h1>
        </div>
    );
}

render(
    <>
        <Dashboard loggedIn={true} />
        <Dashboard loggedIn={false} />
    </>,
    document.querySelector('#react-root'),
);
