import React, { useState } from 'react';

export default function Product(props) {
    const [counter, setCounter] = useState(0);
    const { details } = props;

    function handleIncrement() {
        setCounter(counter + 1);
    }

    function handleDecrement() {
        if (counter != 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className="product">
            <img width="50" alt="" src={details.image} />
            <div className="product-info">
                <h2>{details.name}</h2>
                <p>{details.description}</p>
            </div>
            <div className="product-buttons">
                <button disabled={counter === 0} onClick={handleDecrement} className="product-sub">
                    -
                </button>
                <h3 className="product-count">{counter}</h3>
                <button onClick={handleIncrement} className="product-add">
                    +
                </button>
            </div>
        </div>
    );
}
