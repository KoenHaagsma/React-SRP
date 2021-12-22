import React from 'react';

/**
 * @param {boolean} is_loggedin
 */
function getLoginStatus(is_loggedin) {
    if (is_loggedin) {
        return <p>You are logged in</p>;
    } else {
        return <a href="/login">Login</a>;
    }
}

// sample usage (do not modify)
console.log(getLoginStatus(true));
console.log(getLoginStatus(false));
