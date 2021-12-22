// Button.js
import React from 'react';

export default function Button(props) {
    const { children, type, disabled } = props;
    return (
        <button className="ui-button" type={type} disabled={disabled}>
            {children}
        </button>
    );
}
