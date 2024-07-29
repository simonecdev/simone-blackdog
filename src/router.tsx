import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  //import router from "./router.ts"
  import './index.css'
  import Dashboard from './pages/Dashboard.tsx';
import Layout from './pages/layout.tsx';
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    )
  );
 export default router;