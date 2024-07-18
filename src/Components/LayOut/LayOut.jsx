import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import CurrentNav from '../CurrentNav/CurrentNav'

export default function LayOut() {
    return <>
        {/* <NavBar /> */}
        <CurrentNav />
        <Outlet />
    </>

}
