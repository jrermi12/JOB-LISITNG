import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from './pages/HomePage';
import MainLayouts from "./layouts/MainLayouts"
import JobsPage from "./pages/JobsPage"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<MainLayouts />}>
      <Route index element={<HomePage />} /> 
      <Route path='/jobs' element={<JobsPage />} /> 
      <Route path='*' element={<NotFound />} /> 

    </Route >

  )
);
const App = () => {
  return <RouterProvider router={router} />
}

export default App