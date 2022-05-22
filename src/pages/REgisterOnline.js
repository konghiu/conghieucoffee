import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { register_online } from '../actions'

const REgisterOnline = () => {
     const register = useSelector(state => state.register)
     const dispatch = useDispatch()
     const navigate = useNavigate()

     const formik = useFormik({
          initialValues: {
               fullName: "",
               phone: "",
               address: ""
          },
          validationSchema: Yup.object({
               fullName: Yup.string()
                    .required("Required"),
               phone: Yup.string()
                    .required("Required"),
               address: Yup.string()
                    .required("Required"),
          }),
          onSubmit: values => {
               dispatch(register_online({
                    "name": values.fullName,
                    "phone": values.phone,
                    "address": values.address
               }))
               console.log("register success!")
               navigate("/booking-online")
          },
     })

     useEffect(() => {
          if(register.online.registed) {
               navigate("/booking-online")
          }
     }, [])


     return (
          <div className='width-screen mt-20 text-xl flex flex-col items-center justify-center'>
               <p className='text-2xl font-bold mb-5'>Đăng ký để đặt hàng online</p>
               <form className='w-1/3  md:w-1/2 mb:w-full sm:w-full flex flex-col shadow-xl border-t-2 border-black p-5' onSubmit={formik.handleSubmit}>
                    {/* <label className='font-semibold'>Họ và tên khách hàng:</label> */}
                    <input
                         type="text"
                         id="fullName"
                         className='rounded-md pl-4 py-1 my-2'
                         placeholder='enter your fullname'
                         value={formik.values.fullName}
                         onChange={formik.handleChange}
                         />
                    {
                         formik.errors.fullName ? 
                         <p className='text-red-500'>{formik.errors.fullName}</p>
                         : null
                    }
                    <input 
                         type='text'
                         id="phone"
                         className='rounded-md pl-4 py-1 my-2'
                         placeholder='enter your phone'
                         value={formik.values.phone}
                         onChange={formik.handleChange}
                         />
                    {
                         formik.errors.phone ?
                         <p className='text-red-500'>{formik.errors.phone}</p>
                         : null
                    }
                    <input 
                         type="text"
                         id="address"
                         className='rounded-md pl-4 py-1 my-2'
                         placeholder="Địa chỉ liện hệ"
                         value={formik.values.address}
                         onChange={formik.handleChange}
                    />
                    {
                         formik.errors.address ?
                         <p className='text-red-500'>{formik.errors.address}</p>
                         : null
                    }
                    <button
                         type='submit'
                         className='py-1 mt-5 border-2 bg-black text-white border-black'
                    >submit</button>
                    <p className='font-thin my-5 text-center'
                         >Đặt hàng offline <span 
                              className='font-semibold cursor-pointer hover:underline'
                              onClick={() => navigate('/register-offline')}
                         >tại đây</span>
                    </p>
               </form>
          </div>
     )
}

export default REgisterOnline