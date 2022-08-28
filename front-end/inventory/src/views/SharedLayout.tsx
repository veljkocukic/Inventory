import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar/Sidebar'

export const SharedLayout = () => {
  return (
    <>
    <Sidebar/>
    <div className='dashboard-container'>
    <Outlet/>

    </div>
    </>
  )
}
