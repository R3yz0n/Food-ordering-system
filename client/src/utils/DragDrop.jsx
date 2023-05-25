import { motion } from 'framer-motion'
import React from 'react'
import { fadeInOut } from '../animations'

const DragDrop = () => {
    return (
        <motion.div {...fadeInOut} className="flex flex-col items-center justify-center pt-5 pb-6 rounded-md">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or Drag and Drop</p>
        </motion.div>
    )
}

export default DragDrop