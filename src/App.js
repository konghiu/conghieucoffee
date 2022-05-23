import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BookingOffline from './pages/BookingOffline'
import BookingOnline from './pages/BookingOnline'
import ChooseForm from './pages/ChooseForm'
import './App.css'
import './font-awesome/css/all.css'
import './font-awesome/css/all.min.css'
import Payment from './pages/Payment'
import ErrorWeb from './pages/ErrorWeb'
import RegisterOffline from './pages/RegisterOffline'
import REgisterOnline from './pages/REgisterOnline'
import CompletePage from './pages/CompletePage'
import Download from './pages/Download'
import { useNavigate } from 'react-router'

const App = () => {

     const navigate = useNavigate()

     return (
         <div className='flex flex-col justify-center items-center'>
               <div className='width-screen relative flex flex-col items-center border-2'>
                    <p 
                         className='text-center py-10 mb:py-5 mb:text-3xl text-4xl font-semibold font-mono cursor-pointer'
                         onClick={() => {
                              navigate("/")
                         }}
                    >{"<Công Hiếu/>"}</p>
                    <ErrorWeb />
               </div>
               <Routes>
                    <Route path='/homepage' element={<ChooseForm />} />
                    <Route path='*' element={<ChooseForm />} />
                    <Route path='/' element={<ChooseForm />} />
                    <Route path='/booking-online' element={<BookingOnline />} />
                    <Route path='/booking-offline' element={<BookingOffline />} />
                    <Route path='/register-online' element={<REgisterOnline />} />
                    <Route path='/register-offline' element={<RegisterOffline />} />
                    <Route path='/booking-online/payment-online' element={<Payment />} />
                    <Route path='/booking-online/payment-online/complete' element={<CompletePage />} />
                    <Route path='/booking-online/payment-online/complete/download' element={<Download />} />
                    <Route path='/booking-offline/payment-offline' element={<Payment />} />
                    <Route path='/booking-offline/payment-offline/complete' element={<CompletePage />} />
                    <Route path='/booking-offline/payment-offline/complete/download' element={<Download />} />
               </Routes>
         </div>
     )
}

export default App