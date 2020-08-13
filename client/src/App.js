import React from 'react';
import './App.css';
import routerRendering from './components/commons/routerRendering';
import { masterRoutes } from './routes/masterRoute';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {routerRendering(masterRoutes, true)}
      </BrowserRouter>
    </div>
  );
}

export default App;
