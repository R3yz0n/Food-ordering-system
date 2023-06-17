import React from 'react'
import { APIURL } from '../../utils/constants';
import { HiCurrencyRupee } from 'react-icons/hi';
import { RiShoppingBasketFill } from 'react-icons/ri'
import { motion } from 'framer-motion';
import { btnClick } from '../../animations';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cart/cartAction';


const FoodItemCard = ({ item }) => {
    const { userData } = useSelector(state => state.currUser)
    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const handleClick = () => {
        // console.log(item);
        const userId = userData.id;
        const itemId = item.id
        const price = +item.price
        const existingItem = cartItems.find(item => item.id === itemId);
        console.log(existingItem);
        const data = {
            userId: userData.userId,
            itemId: item.id
        }

        if (existingItem) {

        }
        else {

            dispatch(addToCart({ userId, itemId, quantity: 1, price }))

        }

        // dispatch(addToCart(data))




    }

    return (
        <motion.div className=' duration-200 bg-white drop-shadow-md hover:shadow-lg hover:shadow-gray-400  flex items-center w-[350px] xs:w-225  sm:w-300 md:w-[230px] lg:w-[290px] py-4 p-2 gap-1 rounded-lg mx-auto relative h-[10rem] food-item-card '>
            <LazyLoadImage className=' w-[8rem] xs:w-[6rem]  sm:max-w-[9rem] sm:min-w-[9rem]   md:min-w-[7rem] md:max-w-[7rem]   lg:min-w-[9rem]    object-contain p-1 ' effect='opacity' src={`${APIURL}/file/${item.image}`} alt="FoodItem" delayTime={500} visibleByDefault={false} />
            <div className='pt-4 w-28'>
                <p className=' text-headingColor font-semibold text-center '>{item.name}</p>
                <p className='font-semibold text-red-500 flex items-center justify-center gap-1 pt-1'><HiCurrencyRupee className='text-xl' />{parseFloat(item.price)}</p>
            </div>

            <motion.div className='w-8 h-8 p-1 rounded-full bg-red-500 flex items-center justify-center absolute top-2 right-2 cursor-pointer' {...btnClick} onClick={handleClick}>
                <RiShoppingBasketFill className='text-3xl text-primary' />


            </motion.div>


        </motion.div>
    )
}

export default FoodItemCard