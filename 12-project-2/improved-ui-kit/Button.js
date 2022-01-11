// Button.js
import React from 'react';
import clsx from 'clsx';

export default function Button(props) {
    const { children, className, type, ...rest } = props;
    const classes = clsx('ui-button', className);
    return (
        <button {...rest} className={classes} type={type}>
            {children}
        </button>
    );
}
