import React from 'react';

export default function NameForm(props) {
    return (
        <>
            <form onSubmit={props.handleFormSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={props.name} onChange={props.handleNameChange} />
                <input type="submit" value="Save" />
            </form>
        </>
    );
}
