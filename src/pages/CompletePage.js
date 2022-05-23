import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useReactToPrint } from 'react-to-print'
import { clear_items, clear_tables } from '../actions'
import Download from './Download'


const CompletePage = () => {

     const dispatch = useDispatch()
     const navigate = useNavigate()

     const downloadRef = useRef()

     const handlePrint = useReactToPrint({
          content: () => downloadRef.current,
          onAfterPrint: () => {
               dispatch(clear_items())
               dispatch(clear_tables())
               navigate('/')
          },
          pageStyle: '@page { size: auto; margin: 25mm; } @media print { body { -webkit-print-color-adjust: exact; padding: 40px !important; } }'
     });

     

     return (
          <div className='width-screen text-lg mb-10 flex items-center justify-center flex-col'>
               <Download  ref={downloadRef}/>
               <button
                    className='px-5 py-2 bg-black text-white'
                    onClick={() => handlePrint()}
               >Lưu hóa đơn</button>           
               <p className='mt-3 text-red-500 text-xl mb:text-base'>*Hoặc chụp màn hình*</p>
          </div>
     )
}

export default CompletePage