import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllItems, searchItems } from '../../../store/product/productAction';
import MainLoader from '../../../animations/MainLoader';
import { clearFields } from '../../../store/product/productSlice';
import { DeleteItem } from './DeleteItem';
import Item from './Item';
import EditItem from './EditItem';

const Items = () => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectItem, setSelectItem] = useState('');
    const dispatch = useDispatch()
    const { items, loading, success } = useSelector(state => state.product)
    const { searchValue } = useSelector(state => state.search)


    const handleDelete = (item) => {
        setSelectItem(item)
        setShowDeleteModal(true);
    }

    const handleEdit = (item) => {
        // console.log(item);
        setSelectItem(item)
        setShowEditModal(true)



    }

    const hideEditModal = async (status) => {

        setSelectItem('')

        setShowEditModal(state => !state)
        // the fetching items will only be called after successful deleteion
        if (status === true)
            await dispatch(getAllItems()).then(() => dispatch(clearFields()))



    }

    //toggler
    const hideDeleteModal = async (status) => {
        setSelectItem('')
        // console.log(selectItem);
        setShowDeleteModal(state => !state)
        // the fetching items will only be called after successful deleteion
        if (status === true)
            await dispatch(getAllItems()).then(() => dispatch(clearFields()))

    }




    useEffect(() => {
        // console.log(searchValue);
        if (searchValue) {
            const id = setTimeout(() => {


                const search = { searchValue: searchValue, category: 'all' }
                dispatch(searchItems(search)).then(res => dispatch(clearFields()))

            }, [2000])

            return () => { clearTimeout(id) }

        }
        else {

            dispatch(getAllItems()).then(() => { dispatch(clearFields()) })
        }


    }, [dispatch, searchValue])







    return (
        <>
            <div className="   mt-10 max-h-[80vh] overflow-y-auto scrollbar-thin shadow-lg relative">
                {loading && <MainLoader />}


                <table className="min-w-full static" >
                    <thead className="  text-lg text-gray-800 bg-[rgb(229,231,235)] shadow-md font-sans ">
                        <tr>
                            <th className="py-3 px-6 text-left">Image</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Price</th>
                            <th className="py-3 px-6 text-left">Category</th>
                            <th className="py-3 px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-y-scroll max-h-[60vh] scrollbar-track-black ">

                        {items?.length > 0 ? items.map((item, index) => (

                            <Item item={item} handleDelete={handleDelete} handleEdit={handleEdit} index={index} key={item.id} />


                        )) : <tr className='text-red-700  flex w-full  p-2 text-lg'><td className=''>No Data Found.</td></tr>
                        }
                    </tbody>
                </table>
            </div>
            {showDeleteModal && <DeleteItem hideDeleteModal={hideDeleteModal} selectItem={selectItem} />}
            {showEditModal && <EditItem hideEditModal={hideEditModal} selectItem={selectItem} />}
        </>









    )
}

export default Items


