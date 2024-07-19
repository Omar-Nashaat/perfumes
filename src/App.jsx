import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import LayOut from './Components/LayOut/LayOut'
import ContactUs from './Components/ContactUs/ContactUs'
import AnotherHome from './Components/AnotherHome/AnotherHome'

export default function App() {

  const routes = createBrowserRouter([
    {
      path: '', element: <LayOut />, children: [
        { path: '', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'AnotherHome', element: <AnotherHome /> },
        { path: 'ContactUs', element: <ContactUs /> },
      ]
    }
  ])

  return <>
    <RouterProvider router={routes}>
    </RouterProvider>
  </>
}
