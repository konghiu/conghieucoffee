const registerinitital = {
     "offline": {
          "registed": false,
          "user": {}
     },
     "online": {
          "registed": false,
          "user": {}
     }
}


const registerReducer = (state = registerinitital, action) => {

     switch (action.type) {
          case "REGISTEROFFLINE":
               if(action.payload) {
                    return  {
                         ...state,
                         offline: {
                              "registed": true,
                              "user": action.payload
                         }
                    }
               } else {
                    return {
                         ...state
                    }
               }

          case "REGISTERONLINE":
               if(action.payload) {
                    return {
                         ...state,
                         online: {
                              "registed": true,
                              "user": action.payload
                         }
                    }
               } else {
                    return {
                         ...state
                    }
               }
          default:
               return state
     }

}

export default registerReducer