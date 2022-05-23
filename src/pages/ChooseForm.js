import React from 'react'
import { Link } from 'react-router-dom'

const ChooseForm = () => {

     return (
          <div className='mb:flex-col sm:flex-col flex items-center justify-between mt-20'>
               <Link     
                    to="/register-online" 
                    className='mr-3 mb:mr-0 sm:mr-0 mb:mb-5 sm:mb-5 bg-black text-white text-2xl border-2 border-black hover:bg-white hover:text-black  px-7 py-2'
                    onClick={() => {
                         localStorage.setItem("typeBuy", "online")
                    }}
               >Đặt hàng online</Link>
               <Link 
                    to="/register-offline" 
                    className='ml-3 mb:ml-0 sm:ml-0 bg-black text-white text-2xl border-2 border-black hover:bg-white hover:text-black px-7 py-2'
                    onClick={() => {
                         localStorage.setItem("typeBuy", "offline")
                    }}     
               >Đặt hàng offline</Link>
          </div>
     )
}

export default ChooseForm