import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Routes';

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
