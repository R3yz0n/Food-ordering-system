import React from 'react'
import { NavLink } from 'react-router-dom'
import FoodZone from '../assests/FoodZone.png'
import { isActiveStyles, isNotActiveStyles } from '../utils/nav'

const DBLeft = () => {
    return (
        <section className='h-full py-12 flex flex-col backdrop-blur-md shadow-md min-w-210 w-300 gap-3'>


            <NavLink to='/' className='flex items justify-start gap-4 items-center'>
                <img src={FoodZone} className='w-20' alt="FoodZone" />
                <p className='font-semibold text-xl '>Foodie.</p>
            </NavLink>
            <hr className='border-gray-100' />


            <ul className='flex flex-col gap-4' >
                <NavLink className={({ isActive }) => isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500` : isNotActiveStyles} to={'/dashboard/home'}>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500` : isNotActiveStyles} to={'/dashboard/orders'}>Orders</NavLink>
                <NavLink className={({ isActive }) => isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500` : isNotActiveStyles} to={'/dashboard/items'}>Items</NavLink>
                <NavLink className={({ isActive }) => isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500` : isNotActiveStyles} to={'/dashboard/addnewitems'}>Add new items</NavLink>
                <NavLink className={({ isActive }) => isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500` : isNotActiveStyles} to={'/dashboard/users'}>Users</NavLink>

            </ul>

        </section>
    )
}

export default DBLeft