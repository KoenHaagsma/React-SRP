import React, { useState } from 'react';
import { render } from 'react-dom';

function OrderInsurance() {
    const [order, setOrder] = useState({
        id: 1,
        items: [1, 4, 10],
    });

    function clickAddInsurance() {
        setOrder({
            ...order,
            insurance: 'basic',
        });
    }

    function clickRemoveInsurance() {
        const { insurance, ...modifiedOrder } = order;
        setOrder(modifiedOrder);
    }

    return (
        <div>
            <h1>Your order</h1>
            {order.insurance ? <p>Order is insured</p> : <p>Order is not insured</p>}
            <button onClick={clickAddInsurance} disabled={order.insurance === 'basic'}>
                Add insurance
            </button>
            <button onClick={clickRemoveInsurance} disabled={order.insurance === undefined}>
                Remove insurance
            </button>
        </div>
    );
}

render(<OrderInsurance />, document.querySelector('#react-root'));
