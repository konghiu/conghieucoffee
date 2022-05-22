import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Products from '../component/Products'
import SearchForm from '../component/SearchForm'

const BookingOnline = () => {

     const navigate = useNavigate()
     const register = useSelector(state => state.register)

     useEffect(() => {
          if(!register.online.registed) navigate('/register-online') 
     }, [])

     return (
          <div className='width-screen flex flex-col'>
               <SearchForm />
               <Products /> 
          </div>
     )
}

export default BookingOnline