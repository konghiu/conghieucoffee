
const bookTablesReducer = (state = [], action) => {
     let tables
     switch (action.type) {
          case "BOOKTABLE":
               const prev_list = [...state]
               if(prev_list.length >= 1) {
                    const hadTable = prev_list.find(item => String(item.number) === String(action.payload.number))
                    if(!hadTable) {
                         tables = [...prev_list, action.payload]
                    } else {
                         const new_list = prev_list.filter(item => {
                              return item.number !== action.payload.number
                         })
                         tables = [...new_list]
                    }
               } else {
                    tables = [...prev_list, action.payload]
               }
               break

          case "CLEARTABLES":
               tables = []
               break
          default:  
               return state
     }
     console.log(tables)
     return tables

}

export default bookTablesReducer