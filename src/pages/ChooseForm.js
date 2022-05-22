import React from 'react'
import { Link } from 'react-router-dom'

const ChooseForm = () => {

     return (
          <div className='mb:width-screen sm:width-screen mb:grid grid-cols-2 sm:grid flex items-center justify-between mt-20'>
               <Link     
                    to="/register-online" 
                    className='mr-3 bg-black text-white text-2xl border-2 border-black hover:bg-white hover:text-black  px-7 py-2 mb:px-3 text-center'
                    onClick={() => {
                         localStorage.setItem("typeBuy", "online")
                    }}
               >Đặt hàng online</Link>
               <Link 
                    to="/register-offline" 
                    className='ml-3 bg-black text-white text-2xl border-2 border-black hover:bg-white hover:text-black px-7 py-2 mb:px-3 text-center'
                    onClick={() => {
                         localStorage.setItem("typeBuy", "offline")
                    }}     
               >Đặt hàng offline</Link>
          </div>
     )
}

export default ChooseForm