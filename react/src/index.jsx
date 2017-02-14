import React from 'react'
import ReactDOM from 'react-dom';

import SideSelector from './sideSelector';

ReactDOM.render(
    <div className="container-fluid">
        <h2 className="center">Please select the number of dice you want.</h2>
        <SideSelector />
    </div>,
    document.getElementById('root')
);