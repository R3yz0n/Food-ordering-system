import React, { useEffect } from 'react'

import CartHeader from './CartHeader'
import { motion } from 'framer-motion'
import { btnClick, fade, slideLeft } from '../../animations'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from '../../assests/EmptyCart.png'
import { showCart } from '../../store/cart/cartSlice'
import { useNavigate } from 'react-router-dom'
import { PopularFood } from '../../utils/constants'
import CartItem from './CartItem'
import { CartOverlay } from '../../common/Overlay'


const Cart = () => {
    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)
    const navigate = useNavigate()

    const shopMealNow = () => {
        dispatch(showCart())
        navigate('/menu')



    }

    return (

        <CartOverlay>

            <motion.main className='fixed z-50 top-0 right-0 w-full sm:w-508   shadow-md h-screen bg-gradient-to-r from-rose-100 to-teal-100 '  {...slideLeft}>

                <CartHeader />



                <section className='flex-1 flex flex-col items-start justify-start rounded-tl-3xl sm:rounded-tl-none rounded-tr-3xl sm:mr-2 bg-zinc-900 h-full py-6 gap-3 relative'>

                    {
                        cartItems && !cartItems.length > 0 ?
                            <aside className='flex flex-col w-full items-start justify-start  gap-3 h-[65%] overflow-y-scroll scroll-auto scrollbar-none px-3'>

                                {
                                    PopularFood.map((item) =>
                                        <CartItem item={item} key={item.id} />
                                    )
                                }


                            </aside> :
                            <aside className='w-full flex mt-28 flex-col gap-2 '>

                                <img className='w-40  mx-auto' src={EmptyCart} alt="Empty Cart" />
                                <p className='text-gray-200 font-semibold text-center text-lg' >Your cart is empty</p>
                                <motion.button {...btnClick} className='bg-green-700 hover:bg-green-800 w-40 px-2 font-semibold py-1 mx-auto rounded-md text-gray-100' onClick={shopMealNow} >
                                    Shop Meal Now
                                </motion.button>
                                <p className='flex text-gray-100 items-center gap-2 justify-center px-16'>
                                    <span className='border-t w-full' />
                                    OR
                                    <span className='border-t w-full' />

                                </p>
                                <motion.button {...btnClick} className='bg-red-600 hover:bg-red-700 w-40 px-2 font-semibold py-1 mx-auto rounded-md text-gray-200' onClick={() => dispatch(showCart())} >
                                    Close Cart
                                </motion.button>




                            </aside>
                    }


                </section>

            </motion.main>
        </CartOverlay>
    )
}

export default Cart