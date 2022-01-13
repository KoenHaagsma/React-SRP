import React, { useState } from 'react';
import { render } from 'react-dom';

function Products() {
    // do not modify the state
    const [products, setProducts] = useState(['Almond', 'Cashew', 'Rice', 'Water']);

    return (
        <ul>
            {products.map((product) => (
                <li key={product}>{product}</li>
            ))}
        </ul>
    );
}

render(<Products />, document.querySelector('#react-root'));
