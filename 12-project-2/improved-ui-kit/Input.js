// Input.js
import React from 'react';
import clsx from 'clsx';

export default function Input(props) {
    const { className, ...rest } = props;
    const classes = clsx('ui-textfield', className);
    let type = props.type;
    if (!type) {
        type = 'text';
    }
    return <input {...rest} className={classes} type={type} />;
}
