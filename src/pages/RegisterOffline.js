import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { register_offline } from '../actions'
import { useNavigate } from 'react-router'

const RegisterOffline = () => {

     const register = useSelector(state => state.register)
     const dispatch = useDispatch()
     const navigate = useNavigate()

     const formik = useFormik({
          initialValues: {
               fullName: "",
               phone: ""
          },
          validationSchema: Yup.object({
               fullName: Yup.string()
                    .required("Required"),
               phone: Yup.string()
                    .required("Required")
          }),
          onSubmit: values => {
               dispatch(register_offline({
                    "name": values.fullName,
                    "phone": values.phone
               }))
               navigate("/booking-offline")
          },
     })
     useEffect(() => {
          if(register.offline.registed) {
               navigate("/booking-offline")
          }
     }, [])


     return (
          <div className='width-screen mt-20 text-xl flex flex-col items-center justify-center'>
               <p className='text-2xl font-bold mb-5'>Đăng ký để đặt hàng offline</p>
               <form className='w-1/3 md:w-1/2 mb:w-full sm:w-full shadow-xl border-t-2 border-black p-5 flex flex-col' onSubmit={formik.handleSubmit}>
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
                         <p className="text-red-500">{formik.errors.fullName}</p>
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
                    <button 
                         type='submit'
                         className='py-2 bg-black text-white mt-5'
                    >submit</button>
                    <p className='font-thin my-5 text-center'
                         >Đặt hàng online <span 
                              className='font-semibold cursor-pointer hover:underline'
                              onClick={() => navigate('/register-online')}
                         >tại đây</span>
                    </p>
               </form>
          </div>
     )
}

export default RegisterOffline