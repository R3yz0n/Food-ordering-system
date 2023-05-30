import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Overlay from "../../../common/Overlay";
import { motion } from "framer-motion";
import { btnClick } from "../../../animations";
import { deleteItem, getAllItems } from "../../../store/product/productAction";
import { clearFields } from "../../../store/product/productSlice";
import { useNavigate } from "react-router-dom";

export const DeleteItem = ({ toggleShowModal, passItem }) => {


    const dispatch = useDispatch();
    const { success, items } = useSelector((state) => state.product);
    const navigate = useNavigate('')




    useEffect(() => {
        if (success !== false) {
            dispatch(clearFields())
            // dispatch(getAllItems())
            setTimeout(() => {

                toggleShowModal()
            }, [1500])
        }

    }, [success, dispatch,])



    return (
        <Overlay>

            <div className="fixed inset-0 flex items-center justify-center z-50">

                <div className="w-1/3 ">

                    <div className="relative flex flex-col w-full px-4 bg-gray-100 border-0 rounded-lg shadow-lg outline-none focus:outline-none ">
                        {/*body*/}

                        <div className="relative flex justify-center">
                            <p className="my-4 text-lg font-semibold leading-relaxed text-slate-800">
                                Are you sure you want to delete?
                            </p>
                        </div>

                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-400">

                            <motion.button {...btnClick} className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none" type="button" onClick={async () => {
                                await dispatch(deleteItem(passItem))


                            }}> Yes </motion.button>
                            <motion.button {...btnClick} className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none" type="button" onClick={toggleShowModal} >  No </motion.button>

                        </div>
                    </div>
                </div>
            </div>
        </Overlay>
    );
};
