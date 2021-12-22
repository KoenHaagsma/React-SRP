import React from 'react';
import { render } from 'react-dom';
import Hero from './Hero.js';

function App() {
    return <Hero></Hero>;
}

const root = document.querySelector('#react-root');
render(<App></App>, root);
