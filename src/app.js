import React from 'react';
import { render } from 'react-dom';
import TicTacToeApp from './js/TicTacToeApp';

const container = document.getElementById('app-container');

render(
    <TicTacToeApp />,
    container,
);
