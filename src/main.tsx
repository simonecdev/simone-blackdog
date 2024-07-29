import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './router.tsx';

const theme = {
  palette: {
    primary: 'black',
    secondary: 'white',
    focus: 'yellow',
    accents: 'red'
  }
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
