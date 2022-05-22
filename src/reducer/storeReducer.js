

const storeReducer = (state = [], action) => {
     let store
     switch (action.type) {
          case "ADDITEM":
               let new_state = [...state]
               const hasItem1 = new_state.find(item => item.size === action.payload.size)
               const hasItem2 = new_state.find(item => item.name === action.payload.name)
               if(!hasItem1 || !hasItem2) {
                    store = [ ...new_state, action.payload ]
               } else if (hasItem2 && hasItem1) {
                    const index = new_state.findIndex(item => {
                         return item.name === action.payload.name && item.size === action.payload.size
                    })
                    new_state[index].quantity += action.payload.quantity
                    store = [...new_state]
               }
               break;

          case "REMOVEITEM":
               const remove_list = [...state]
               remove_list.splice(action.payload, 1)
               store = [...remove_list]
               break

          case "DECREASEITEM":
               const decrease_list = [...state]
               if ( decrease_list[action.payload].quantity === 1) {
                    return store = [...state]
               } else {
                    decrease_list[action.payload].quantity -= 1
                    return store = [...decrease_list]
               }

          case "INCREASEITEM":
               const increase_list = [...state]
               increase_list[action.payload].quantity += 1
               store = [...increase_list]
               break
          case "CLEARITEMS":
               // const clear_items = [...state]
               store = []
               break
          default:
               return state;
               // throw new Error('invalid action ... ');
     }
     console.log(store)
     return store
}

export default storeReducer

