import React, { useState } from 'react';
import { render } from 'react-dom';

function App() {
    const [quantity, setQuantity] = useState(0);

    return (
        <>
            <input
                type="number"
                name="quantity"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
            />
            <p>Ordering {quantity} items</p>
        </>
    );
}

render(<App />, document.querySelector('#react-root'));
