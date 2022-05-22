import React, { useState } from 'react';
import { render } from 'react-dom';

function App() {
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(false);

    async function handleButtonClick() {
        setIsLoading(true);
        try {
            const response = await fetch('https://react-tutorial-demo.firebaseio.com/users.json');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
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
