import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { decrease_item, increase_item, remove_item } from '../actions'

const title = ["Sản phẩm", "Size", "Số lượng", "Giá hàng"]

const Payment = () => {

     const products = useSelector(state => state.storeBooks)
     const tables = useSelector(state => state.bookTables)
     const register = useSelector(state => state.register)
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const typeBuy = localStorage.getItem("typeBuy")


     const handleRemoveProducts = (index) => {
          dispatch(remove_item(index))
     }
 
     useEffect(() => {
          if(products.length === 0) {
               window.history.back()
          }
     }, [])

          const totalPrice = useMemo(() => {
          if(products.length !== 0) {
               let total = 0
               products.forEach(item => {
                    total += Number(item.price.replace(".", "")) * Number(item.quantity)
               });
               console.log(total)
               return total
          }
     }, [products])
 

     return (
          <React.Fragment>
               {
                    products.length > 0 ?
                    <div className='width-screen my-10 flex flex-col justify-center'>
                         <p className='text-2xl font-semibold'>Danh sách sản phẩm đã đặt</p>
                         <div className='w-full'>
                              <div className='grid grid-cols-5 mt-5'>
                                   {
                                        title.map((item, index) => (
                                             <p
                                                  key={index}
                                                  className='text-center'
                                             >{item}</p>
                                        ))
                                   }
                              </div>
                              {
                                   products.map((item, index) => (
                                        <div 
                                             className='w-full grid grid-cols-5 gap-5 sm:gap-0 my-10 border-b-2 text-xl'
                                             key={index}     
                                        >
                                             <div className='flex sm:flex-col mb:flex-col items-center'>
                                                  <div className='w-20 h-20'>
                                                       <img src={item.image} alt="" className='w-full h-full' />
                                                  </div>
                                                  <p className='ml-5 mb:ml-0 mb:w-full mb:text-sm sm:ml-0 sm:w-full sm:text-sm'>{item.name}</p>
                                             </div>
                                             <p className='flex items-center justify-center'>{item.size}</p>
                                             <div className='flex items-center justify-center'>
                                                  <i 
                                                       className="fa-solid fa-caret-left"
                                                       onClick={() => dispatch(decrease_item(index))}
                                                       ></i>
                                                  <p className='flex items-center justify-center mx-3'>{item.quantity}</p>
                                                  <i 
                                                       className="fa-solid fa-caret-right"
                                                       onClick={() => dispatch(increase_item(index))}
                                                  
                                                  ></i>
                                             </div>
                                             <p className='flex items-center justify-center'>{item.price}<sup>đ</sup></p>
                                             <div className='flex items-center justify-center text-xl cursor-pointer opacity-60 hover:opacity-100'>
                                                  <i  
                                                       className="fa-solid fa-trash-can"
                                                       onClick={() => handleRemoveProducts(index)}
                                                  ></i>
                                             </div>
                                        </div>
                                   ))
                              }
                         </div>
                         <div className='flex justify-between'>
                              <p>Total price:</p>
                              <p>{totalPrice.toLocaleString()}<sup>đ</sup></p>
                         </div>
                    </div>
                    : 
                    <div>
                         <p>Not any products at here</p>
                         <p
                              onClick={() => {
                                   window.history.back()
                              }}
                         >click here to come back prev page</p>
                    </div>
               }
               {
                    tables.length !== 0 && products.length !== 0 ?
                    <div className='width-screen flex flex-col mb-20'>
                         <p className='text-2xl font-semibold'>Danh sách bàn đã đặt</p>
                         <p className='text-red-500 my-1 '>* Lưu ý: tiền bàn được tính theo giờ  (50k/1h)</p>
                              <div className='grid grid-cols-10 gap-10'>
                                   {
                                        tables.map((item, index) => (
                                             <div key={index} className='flex-1 flex justify-around items-center text-lg py-2'>
                                                  <p className=''>Bàn số {item.number}</p>
                                             </div>
                                        ))
                                   }
                         </div>                         
                    </div>
                    : null
               }
               {
                    products.length !== 0 ?
                    <div className='flex flex-col width-screen mb-20'>
                         <p className='text-2xl font-semibold mb-5'>Kiểm tra thông tin đơn hàng lần cuối</p>
                         <div className='w-full text-xl grid grid-cols-2 mb:grid-cols-1 sm:grid-cols-1 gap-10'>
                              <div className='grid grid-cols-2'>
                                   <p className='font-semibold'>Tên người đặt:</p>
                                   <p>{register[typeBuy].user.name}</p>
                                   <p className='font-semibold'>Số điện thoại người đặt:</p>
                                   <p>{register[typeBuy].user.phone}</p>
                                   <p className='font-semibold'>Địa chỉ người đặt:</p>
                                   <p>{register[typeBuy].user.address || "Tại quán"}</p>
                              </div>
                              <div className='grid grid-cols-2'>
                                   <p className='font-semibold'>Tiền sản phẩm:</p>
                                   <p>{totalPrice.toLocaleString()}<sup>đ</sup></p>
                                   <p className='font-semibold'>Tiền bàn:</p>
                                   <p>{typeBuy === 'online' ? 0 : "Chưa tính"}</p>
                                   <p className='font-semibold'>Tiền giao hàng:</p>
                                   <p>{typeBuy === 'online' ? "25,000" : "0"}<sup>đ</sup></p>
                                   <p className='font-semibold'>Tổng thanh toán</p>
                                   <p>{typeBuy === "offline" ? totalPrice.toLocaleString() : (totalPrice + 25000).toLocaleString()}<sup>đ</sup></p>
                              </div>
                         </div>
                         <button   
                              className='self-center text-xl my-10 px-10 py-3 bg-black text-white'
                              onClick={() => {
                                   navigate("complete")
                              }}     
                         >Mua hàng</button>
                    </div>
                    : null
               }
          </React.Fragment>
     )
}

export default Payment