import React from "react";
import Routes from './components/Routes'
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
);

export default App;
