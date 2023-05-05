import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//801338cb

//ReactDOM.render(<App/>,document.getElementById('root')); 
//createRoot.render(<App/>,document.getElementById('root'));
// ReactDOM.render(<App/>,document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App /> 
    </React.StrictMode>
)