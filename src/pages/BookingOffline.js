import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import ChooseTable from '../component/ChooseTable'
import Products from '../component/Products'
import SearchForm from '../component/SearchForm'

const BookingOffline = () => {
  
     const registerOffline = useSelector(state => state.register)

     const navigate = useNavigate()

     useEffect(() => {
          if(!registerOffline.offline.registed) {
               navigate('/register-offline')
          }
     }, [])

     return (
          <div className='width-screen flex flex-col'>
               <SearchForm />
               <Products />
               <ChooseTable />
          </div>
     )
}

export default BookingOffline