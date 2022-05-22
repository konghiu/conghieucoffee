import React, { useEffect, useState } from 'react'
import { setupAPI } from '../fakeAPI'
import CheckBoxTable from './CheckBoxTable'

setupAPI()

const ChooseTable = () => {

     const [ listTable, setListTable ] = useState([])

     useEffect(() => {
          fetch("api/tables")
               .then(res => res.json())
               .then(data => setListTable(data.tables))
     }, [])


     return (
          <div className='w-full mb-20'>
               <div className='width-screen grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb:grid-cols-2 gap-10'>
                    {
                         listTable.map((item, index) => (
                              <CheckBoxTable item={item} key={index} />
                         ))
                    }
               </div>
          </div>
     )
}

export default ChooseTable