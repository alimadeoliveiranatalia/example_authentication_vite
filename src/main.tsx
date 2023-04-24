import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css';
import { AuthProvider } from './contexts/AuthContext';
import { makeServer } from "./server";

if (import.meta.env.DEV){
  makeServer({ environment: "development"})
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
