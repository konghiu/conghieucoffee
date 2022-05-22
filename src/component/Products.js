import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { setupAPI } from '../fakeAPI'
import { removeAccents } from '../reducer/searchReducer'
import PatternProduct from './PatternProduct'

setupAPI()

const buttons = [
     {
          "name": "Tất cả sản phẩm",
          "classify": ""
     },
     {
          "name": "Sản phẩm nổi bật",
          "classify": "highlight"
     },
     {
          "name": "Sản phẩm mới",
          "classify": "new"
     },
     {
          "name": "Nước uống",
          "classify": "water"
     },
     {
          "name": "Đồ ăn vặt",
          "classify": "food"
     }
]

const Products = () => {

     const [ originList, setOriginList ] = useState([])
     const [ showList, setShowList ] = useState([])
     const [ classify, setClassify ] = useState("")
     const textSearch = useSelector(state => state.textSearch)

     useEffect(() => {
          fetch("/api/products")
               .then(res => res.json())
               .then(data => setOriginList(data.products))
     }, [])

     
     useEffect(() => {

          const searchProducts = (list) => {
               const searchLists = []
               list.forEach(item => {
                    if(item.name.includes(textSearch.toUpperCase()) || removeAccents(item.name).toUpperCase().includes(textSearch.toUpperCase())) {
                         searchLists.push(item)
                    }
               })
               setShowList(searchLists)
          }

          if(originList) {
               if(classify === "") {
                    setShowList(originList)
                    searchProducts(originList)
               } else {
                    const selectionLists = []
                    originList.forEach(item => {
                         if(classify.includes(item.classify) || classify.includes(item.type)) {
                              selectionLists.push(item)
                         }
                    })
                    setShowList(selectionLists)
                    searchProducts(selectionLists)
               }
          }
     }, [classify, originList, textSearch])


     return (
          <div>
               <div className='flex md:justify-between text-lg sm:grid mb:grid grid-cols-2 gap-5'>
                    {
                         buttons.map((item, index) => (
                              <button 
                                   key={index}
                                   className='tb-mb:px-2 mb:text-sm md:text-base px-5 py-1 mr-5 tb-mb:mr-0 border-2 border-black bg-black text-white hover:bg-white hover:text-black'
                                   onClick={() => setClassify(item.classify)}     
                              >{item.name}</button>
                         ))
                    }
               </div>
               <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb:grid-cols-2 mb:gap-2 mb:text-sm gap-10 my-20'>
                    {
                         showList  && originList
                         ?
                         showList.map((item, index) => (
                              <PatternProduct key={index} item={item} index={index} classify={classify} />
                         ))
                         : 
                         <p className='py-10 text-center text-2xl font-semibold'>loading api ...</p>
                    }
               </div>
          </div>
     )
}

export default Products