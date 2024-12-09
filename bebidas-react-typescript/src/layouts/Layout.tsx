import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import DrinkDetailsModal from '../components/DrinkDetailsModal'


function Layout() {
    return (
        <>
            <Header />

            <main className='container  mx-auto py-16 w-3/4'>
                <Outlet />
            </main>

            <DrinkDetailsModal/>
          
        </>

    )
}

export default Layout