import React, { useState } from 'react';
import { render } from 'react-dom';

function Wallet() {
    const [transactions, setTransactions] = useState([]);

    function handleDepositClick() {
        setTransactions([...transactions, 10]);
    }

    function handleWithdrawClick() {
        setTransactions([...transactions, -10]);
    }

    function handleClearClick() {
        setTransactions([]);
    }

    const sum = transactions.reduce((total, current) => total + current, 0);

    return (
        <>
            <button onClick={handleDepositClick}>Deposit 10</button>
            <button onClick={handleWithdrawClick}>Withdraw 10</button>
            <h2>Total: {sum}</h2>
            <button onClick={handleClearClick}>Reset</button>
            <ul>
                {/*List transactions here*/}
                {transactions.map((transaction, index) => (
                    <li key={index}>{transaction}</li>
                ))}
            </ul>
        </>
    );
}

render(<Wallet />, document.querySelector('#react-root'));
