

const noteReducer = (state = "", action) => {
          switch (action.type) {
          case "NOTE_WARNING":
               console.log(action.payload)
               return state =  action.payload
          default:
               return state
     }
}

export default noteReducer