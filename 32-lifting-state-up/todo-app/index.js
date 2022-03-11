import React, { useState } from 'react';
import { render } from 'react-dom';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [entry, setEntry] = useState('');

    function handleEntryChange(event) {
        setEntry(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        setTodos([...todos, entry]);
        setEntry('');
    }

    return (
        <>
            <div>
                <TodoForm entry={entry} onFormSubmit={handleFormSubmit} onEntryChange={handleEntryChange} />
                <TodoList todos={todos} />
            </div>
        </>
    );
}

render(<TodoApp />, document.querySelector('#react-root'));
