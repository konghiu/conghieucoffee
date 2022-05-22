import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { book_table } from '../actions'

const CheckBoxTable = props => {

     const dispatch = useDispatch()
     const [ checkboxTable, setCheckboxTable ] = useState(false)
     const item = props.item


     return (
          <div
               className="flex justify-between items-center border-2 border-black cursor-pointer"
          >
               <div 
                    className='flex h-ful py-2 px-3 mb:px-1'
                    style={{'backgroundColor': 'white'}}     
               >
                    <input 
                         type="checkbox"
                         className='w-5 h-5'
                         value={checkboxTable}
                         onChange={() => setCheckboxTable(!checkboxTable)}
                         onClick={() => dispatch(book_table(item))}
                         disabled={item.status === "yes" ? false : true}
                    />
               </div>
               <div
                    className='flex-1 flex justify-around items-center text-lg py-2'
                    style={checkboxTable ? {'backgroundColor': "rgb(59, 130, 246)", "color": "white"} : {'backgroundColor': "white"}}
                    >
                    <p className='mb:text-sm'>Bàn số {item.number}</p>
                    <div className='pr-5 mb:text-sm mb:pr-0 mb:pl-1'>
                         {
                              item.status === "no" ?
                              <p className='text-orange-500'>Hết bàn</p>
                              : 
                              <p 
                                   className='text-blue-500'
                                   style={checkboxTable ? {"color": "white"} : {}}
                              >Còn bàn</p>
                         }
                    </div>
               </div>
          </div>
     )
}

export default CheckBoxTable