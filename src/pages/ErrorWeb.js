import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { note_action } from '../actions'
import './stylePage.css'


const ErrorWeb = () => {

     const noteaction = useSelector(state => state.noteAction)
     const dispatch = useDispatch()

     const parentRef = useRef()

     useEffect(() => {
          if(noteaction !== "") {
               const div = document.createElement("div")               
               div.classList.toggle("toast")
               div.innerHTML = noteaction
               parentRef.current.appendChild(div)
               const timerID = setTimeout(() => {
                    parentRef.current.removeChild(div)
                    dispatch(note_action(""))
               }, 3000);
               
               div.onclick = () => {
                    parentRef.current.removeChild(div)
                    clearTimeout(timerID)
                    dispatch(note_action(""))
               }
          }

     }, [noteaction])


     return (
          <div className='fixed top-20 right-0 overflow-hidden z-10' ref={parentRef}>
               {/* <div className='toast'>Plase add products!</div>      */}
          </ div>
     )
}


export default ErrorWeb