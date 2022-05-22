import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_item } from '../actions'


const PatternProduct = props => {

     const item = props.item

     const searchText = useSelector(state => state.textSearch)
     const dispatch = useDispatch()
     const [ render, setRender ] = useState(false)
     const [ listsCheck, setListsCheck ] = useState([]) 
     const [ notification, setNotification ] = useState("")

     const handleCheck = input => {
          setListsCheck(prev => {
               let checked
               for (let i = 0; i < listsCheck.length; i++) {
                    const item = listsCheck[i];
                    if ( item.size === input.size) {
                         checked = true
                         break;
                    }
               }
                if(checked) {
                    return listsCheck.filter(item => item.size !== input.size)
               } else {
                    return [...prev, input]
               }
          })
     }


     const sizeSref = useRef()
     const sizeMref = useRef()
     const sizeLref = useRef()
     const sizeFoodref = useRef()
     useEffect(() => {
          if(sizeSref.current && sizeSref.current.checked) {
               sizeSref.current.checked = false
          }
          if(sizeMref.current && sizeMref.current.checked) {
               sizeMref.current.checked = false
          }
          if(sizeLref.current && sizeLref.current.checked) {
               sizeLref.current.checked = false
          }
          if(sizeFoodref.current && sizeFoodref.current.checked) {
               sizeFoodref.current.checked = false
          }
          setNotification("")
          setListsCheck([])
     }, [props.classify, searchText])
     

     const  handleAddProduct = () => {
          if(listsCheck.length === 0) {
               setNotification("Please choose size.")
          } else {
               listsCheck.forEach(element => {
                    console.log(item['size_' + element.size])
                    if(item['size_' + element.size]) {
                         dispatch(add_item({
                              "name": item.name,
                              "image": item.image,
                              "quantity": item["size_"+element.size].quantity,
                              "size": element.size,
                              "price": element.price
                         }))
                         setNotification("Order successful!")
                    }
               })
          }
     }

     useEffect(() => {
          const timer = setTimeout(() => {
               console.log("is running ...")
               setNotification('')
          }, 3000)
          if(notification === "") {
               clearTimeout(timer)
               console.log('clear timeout')
          }
          return () => {
               clearTimeout(timer)
          }
     }, [notification, props.classify, searchText])


     return (
          <div className='relative flex flex-col shadow-lg'>
               <div className='absolute top-0 left-0 w-full'>
                    {
                         notification !== "" ?
                         <div
                              className='w-full flex items-center text-lg'
                              style={notification === "Please choose size." ? {"backgroundColor": "#FF9999", "border": "3px solid red", "color": "#E60000"} : {"backgroundColor": "lightgreen", "border": "3px solid green", "color": "green"}}
                         >
                              <div className='px-3 py-1 text-3xl md:text-2xl'>
                                   {
                                        notification === "Please choose size." ?
                                        <i className="fa-solid fa-circle-xmark  text-red-500 bg-white rounded-full"></i>
                                        : <i className="fa-solid fa-check text-green-500"></i>
                                   }
                              </div>
                              <p
                                   className='md:text-sm md:font-semibold'
                              >{notification}</p>
                         </div>
                         : null
                    }
                    <p></p>
               </div>
               <div className='w-full h-60'>
                    <img src={item.image} alt="" className='w-full h-full'/>
               </div>
               <p className='text-xl font-semibold my-2 px-2'>{item.name}</p>
               {
                    item.classify === 'water'
                    ?
                    <div className='flex-1 flex flex-col px-2'>
                         <div className='choose-size'>
                              {
                                   item['size_S'] && item['size_S'].price ? 
                                   <div className='flex items-center justify-between my-1'>
                                        <div className='flex items-center'>
                                             <label>Size S</label>
                                             <input 
                                                  type="checkbox"
                                                  ref={sizeSref} 
                                                  className='ml-2'
                                                  value={listsCheck.map(item => {
                                                       return item.size === "S"
                                                  })}
                                                  onChange={() => handleCheck({
                                                       "size": "S",
                                                       "price": item['size_S'].price
                                                  })}     
                                             />
                                        </div>
                                        <p>{item['size_S'].price}<sup>đ</sup></p>
                                        <div className='flex items-center'>
                                             <i 
                                                  className="fa-solid fa-angle-left"
                                                  onClick={() => {
                                                       if(item["size_S"].quantity < 2) item["size_S"].quantity = 1
                                                       else item["size_S"].quantity -= 1
                                                       setRender(!render)
                                                  }}
                                                  ></i>
                                             <p className='text-lg mx-2'>{item['size_S'].quantity}</p>
                                             <i 
                                                  className="fa-solid fa-angle-right"
                                                  onClick={() => {
                                                       item['size_S'].quantity += 1
                                                       setRender(!render)
                                                  }}
                                                  ></i>
                                        </div>
                                   </div>
                                   : null
                              }
                         </div>
                         <div className=''>
                              {
                                   item['size_M'] && item['size_M'].price ? 
                                   <div className='flex items-center justify-between my-1'>
                                        <div className='flex items-center'>
                                             <label>Size M</label>
                                             <input 
                                                  type="checkbox" 
                                                  ref={sizeMref}
                                                  className='size_M ml-2 text-xl'
                                                  value={listsCheck.map(item => {
                                                       return item.size === "M"
                                                  })}
                                                  onChange={() => handleCheck({
                                                       "size": "M",
                                                       "price": item['size_M'].price
                                                  })} 
                                                  />
                                        </div>
                                        <p>{item['size_M'].price}<sup>đ</sup></p>
                                        <div className='flex justify-between items-center'>
                                             <i 
                                                  className="fa-solid fa-angle-left"
                                                  onClick={() => {    
                                                       if(item['size_M'] < 2) item['size_M'].quantity = 1
                                                       else item['size_M'].quantity -= 1
                                                       setRender(!render)
                                                  }}
                                                  ></i>
                                             <p className='text-lg mx-2'>{item['size_M'].quantity}</p>
                                             <i 
                                                  className="fa-solid fa-angle-right"
                                                  onClick={() => {
                                                       item['size_M'].quantity += 1
                                                       setRender(!render)
                                                  }}
                                                  ></i>
                                        </div>
                                   </div>
                                   : null
                              }
                         </div>
                         <div className=''>
                              {
                                   item['size_L'] && item['size_L'].price ? 
                                   <div className='flex items-center justify-between my-1'>
                                        <div className='flex items-center'>
                                             <label>Size L</label>
                                             <input 
                                                  type="checkbox" 
                                                  ref={sizeLref}
                                                  className='size_L ml-2 text-xl'
                                                  value={listsCheck.map(item => {
                                                       return item.size === "L"
                                                  })}
                                                  onChange={() => handleCheck({
                                                       "size": "L",
                                                       "price": item['size_L'].price
                                                  })} 
                                                  />
                                        </div>
                                        <p>{item['size_L'].price}<sup>đ</sup></p>
                                        <div className='flex justify-between items-center'>
                                             <i 
                                                  className="fa-solid fa-angle-left"
                                                  onClick={() => {
                                                       if(item['size_L'] < 2) item['size_L'].quantity = 1
                                                       else item['size_L'].quantity -= 1
                                                       setRender(!render)
                                                  }}
                                                  ></i>
                                             <p className='text-lg mx-2'>{item['size_L'].quantity}</p>
                                             <i 
                                                  className="fa-solid fa-angle-right"
                                                  onClick={() => {
                                                       item['size_L'].quantity += 1
                                                       setRender(!render)
                                                  }}
                                                  ></i>
                                        </div>
                                   </div>
                                   : null
                              }
                         </div>
                    </div>
                    : 
                    <div>
                         {
                         item['size_food'] && item['size_food'].price ?
                              <div className='flex-1 flex items-center justify-between px-2'>
                                   <div className='flex items-center'>
                                        <label>Size L</label>
                                        <input
                                             type="checkbox" 
                                             ref={sizeFoodref}
                                             className='size_food ml-2 text-xl'
                                             value={listsCheck.map(item => {
                                                  return item.size === "Food"
                                             })}
                                             onChange={() => handleCheck({
                                                  "size": "food",
                                                  "price": item["size_food"].price
                                             })}   
                                        />
                                   </div>
                                   <p>{item["size_food"].price}<sup>đ</sup></p>
                                   <div className='flex justify-between items-center my-1'>
                                        <i 
                                             className="fa-solid fa-angle-left"
                                             onClick={() => {
                                                  if(item['size_food'].quantity < 2) item['size_food'].quantity = 1
                                                  else item['size_food'].quantity -= 1
                                                  setRender(!render)
                                             }}
                                             ></i>
                                        <p className='text-lg mx-2'>{item["size_food"].quantity}</p>
                                        <i 
                                             className="fa-solid fa-angle-right"
                                             onClick={() => {
                                                  item['size_food'].quantity += 1
                                                  setRender(!render)
                                             }}
                                        ></i>
                                   </div>
                              </div>
                              : null    
                         }
                    </div>
               }
               <button 
                    className=' self-center justify-self-end bg-black text-white text-lg border-2 border-black hover:bg-white hover:text-black px-3 py-1 mt-5 mb-3'
                    onClick={() => handleAddProduct()}
               >Thêm vào đơn hàng</button>
          </div>
     )
}

export default PatternProduct