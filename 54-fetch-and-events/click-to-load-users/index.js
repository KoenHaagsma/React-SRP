import React, { useState } from 'react';
import { render } from 'react-dom';

function App() {
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(false);

    function handleButtonClick() {
        setIsLoading(true);
        fetch('https://react-tutorial-demo.firebaseio.com/users.json')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })
            .catch(() => {
                setIsLoading(false);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <>
            <button onClick={handleButtonClick} disabled={isLoading}>
                Load users
            </button>
            <h1>Users</h1>
            <ul>{users && users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
        </>
    );
}

render(<App />, document.querySelector('#react-root'));
