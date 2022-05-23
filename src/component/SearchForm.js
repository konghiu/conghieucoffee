import React from 'react'
import logo from '../logo.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { note_action, text_search } from '../actions'
import { useNavigate } from 'react-router'

const SearchForm = () => {

     const textSearch = useSelector(state => state.textSearch)
     const products = useSelector(state => state.storeBooks)
     const dispatch = useDispatch()
     const navigate = useNavigate()

     const handlePayment = () => {
          const typeBuy = localStorage.getItem("typeBuy")
          if(products.length === 0) {
               dispatch(note_action("Please add products!"))
          } else {
               if(typeBuy === "offline") {
                    navigate(`payment-offline`)
                    NOTE_WARNING()
              } else {
                    navigate(`payment-online`)
                    NOTE_WARNING()
               }
          }
     }
     
     const NOTE_WARNING = () => {
          if(products.length === 0) dispatch(note_action("Please add products!"))
     }

     return (
          <div className='flex justify-center items-center my-5'>
               <div 
                    className='w-20 mb:w-12 cursor-pointer'
                    onClick={() => navigate("/")}
               >
                    <img src={logo} alt="" className='w-full'/>
               </div>
               <div className='flex mx-10 sm:mx-5 mb:mx-2 justify-between flex-1 relative'>
                    <input 
                         type="text" 
                         placeholder="Search for products ... "    
                         className='pl-6 py-2 mb:pl-3 mb:py-1 w-full sm:text-lg mb:text-base text-xl rounded-lg ' 
                         value={textSearch}
                         onChange={e => dispatch(text_search(e.target.value))}
                    />
                    <span className='absolute mb:text-xl text-2xl h-full right-0'>
                         <i className="fa-solid fa-magnifying-glass flex items-center w-full h-full px-3 rounded-r-lg hover:bg-black hover:text-white"></i>
                    </span>
               </div>
               <div className='text-5xl mb:text-4xl cursor-pointer'>
                    <i className="fa-solid fa-cart-shopping"
                         onClick={() => handlePayment()}
                    ></i>
               </div>
          </div>
     )
}

export default SearchForm