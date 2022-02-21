import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <button onClick={props.onCardClick}> Click me</button>
        </div>
    );
}
