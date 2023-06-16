import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Menu from './menu/Menu'
import Profile from './profile/Profile'
import Contact from './contact/Contact'
import PageNotFound from './PageNotFound'
import Cart from './cart/Cart'
import { useSelector } from 'react-redux'


const Main = () => {
    const { isCartOn } = useSelector(state => state.cart)

    return (
        <main className='w-full min-h-screen  bg-primary'>
            <Navbar />

            {isCartOn && <Cart />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<PageNotFound />} />




            </Routes>

        </main>
    )
}

export default Main