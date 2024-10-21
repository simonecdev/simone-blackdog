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
import Layout from './pages/Layout.tsx';
import Whoami from './pages/Whoami.tsx';
import NotExists from './pages/NotExists.tsx';

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="whoami" element={<Whoami />} />

        <Route path='*' element={<NotExists />} />


      </Route>
    )
  );
 export default router;