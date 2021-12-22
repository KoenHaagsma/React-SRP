// Link.js
import React from 'react';

export default function Link(props) {
    const { children, href, disabled } = props;
    return (
        <a className="ui-link" href={href}>
            {children}
        </a>
    );
}
