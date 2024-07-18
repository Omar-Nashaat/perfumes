import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import LayOut from './Components/LayOut/LayOut'
import ContactUs from './Components/ContactUs/ContactUs'

export default function App() {

  const routes = createBrowserRouter([
    {
      path: '', element: <LayOut />, children: [
        { path: '', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'ContactUs', element: <ContactUs /> },
      ]
    }
  ])

  return <>
    <RouterProvider router={routes}>
    </RouterProvider>
  </>
}
