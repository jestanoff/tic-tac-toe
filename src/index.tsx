import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/App/index';

const container = document.getElementById('app-container');
const root = ReactDOM.createRoot(container!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
root.render(<App />);
