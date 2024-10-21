import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './component/context/authContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />

    </AuthContextProvider>
  </React.StrictMode>,
)
