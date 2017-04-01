import React from 'react';
import { render } from 'react-dom';
import TicTacToeApp from './js/TicTacToeApp';

require('./css/font.css');

render(
    <TicTacToeApp />,
    document.getElementById('app-container'),
);
