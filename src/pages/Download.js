import React, { forwardRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Download = (props, ref) => {
     
     const tables = useSelector(state => state.bookTables)
     const products = useSelector(state => state.storeBooks)
     const register = useSelector(state => state.register)
     const typeBuy = localStorage.getItem("typeBuy")


     const [ day, setDay ] = useState({})
     const [ totalPrice, setTotalPrice ] = useState(0)

     useEffect(() => {
          const date = new Date()
          setDay({
               "day": date.getDate(),
               "month": date.getMonth(),
               "year": date.getFullYear(),
               "hour": date.getHours(),
               "minute": date.getMinutes(),
               "second": date.getSeconds()
          })
          if(products.length === 0) window.history.back()
          else {
               let total = 0
               products.forEach(item => {
                    total += Number(item.price.replace(".", "")) * item.quantity
               });
               setTotalPrice(total)
          }
     }, [products])
     
     return (
          <div className='width-screen text-lg flex items-center justify-center flex-col' ref={ref} {...props}>
               <p className='w-2/5 md:w-1/2 sm:w-full mb:w-full text-3xl font-semibold text-center border-b-2 border-black py-5'>HÓA ĐƠN THANH TOÁN</p>
               <div className='w-2/5 md:w-1/2 sm:w-full mb:w-full flex flex-col items-center my-5'>
                    <p>Welcome to CongHieuBar</p>
                    <p>The receipt is valid VAT Inv. Today</p>
                    <p>Hoa don VAT chi xuat trong ngay</p>
                    <p>MFY Side</p>
                    <div className='w-full flex justify-between'>
                         <p>Consumer's name:</p>
                         <p>{register[typeBuy].user.name}</p>
                    </div>
                    <div className='w-full flex justify-between'>
                         <p>Consumer' phone</p>
                         <p>{register[typeBuy].user.phone}</p>
                    </div>
                    <div className='w-full flex justify-between'>
                         <p>Consumer' address</p>
                         <p>{register[typeBuy].user.address || "Tại quán"}</p>
                    </div>
                    <div className='w-full flex justify-between'>
                         <p>ORD at:</p>
                         <p>{day.day}/{day.month}/{day.year} - {day.hour}:{day.minute}:{day.second}</p>
                    </div>
                    <div className='w-full grid grid-cols-1'>
                         <div className='grid grid-cols-4 my-2'>
                              <p>Name</p>
                              <p className='text-center'>Price</p>
                              <p className='text-center'>Quantity</p>
                              <p className='text-right'>Total price</p>
                         </div>
                         {
                              products.map((item, index) => (
                                   <div 
                                        key={index}
                                        className="w-full grid grid-cols-4"
                                   >
                                        <p className='text-left'>{item.name} ({item.size})</p>
                                        <p className='text-center'>{item.price}</p>
                                        <p className='text-center'>{item.quantity}</p>
                                        <p className='text-right'>{(Number(item.price.replace(".", "")) * item.quantity).toLocaleString()}</p>
                                   </div>
                              ))
                         }
                         {
                              tables.map((item, index) => (
                                   <div 
                                        key={index}
                                        className='flex justify-between'
                                   >
                                        <p>Bàn số {item.number}</p>
                                        <p>pay later</p>
                                   </div>
                              ))
                         }
                    </div>
                    <div className='w-full flex justify-between'>
                         <p>Phí giao hàng:</p>
                         <p>{typeBuy === 'online' ? "25,000" : 0}</p>
                    </div>
                    <div className='w-full flex justify-between'>
                         <p>Tổng hóa đơn tạm tính:</p>
                         <p>{typeBuy === 'online' ? (totalPrice + 25000).toLocaleString() : totalPrice.toLocaleString()}</p>
                    </div>
                    <p className='my-3 font-semibold'>Password wifi: 12345678</p>
               </div>     
          </div>
     )
}

     export default forwardRef(Download)