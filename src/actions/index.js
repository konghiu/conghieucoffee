export const register_offline = payload => {
     return {
          type: "REGISTEROFFLINE",
          payload
     }
}

export const register_online = payload => {
     return {
          type: "REGISTERONLINE",
          payload
     }
}


export const add_item = payload => {
     return {
          type: "ADDITEM",
          payload
     }
}

export const remove_item = payload => {
     return {
          type: "REMOVEITEM",
          payload
     }
}

export const clear_items = payload => {
     return {
          type: "CLEARITEMS",
          payload
     }
}

export const decrease_item = payload => {
     return {
          type: "DECREASEITEM",
          payload
     }
}

export const increase_item = payload => {
     return {
          type: "INCREASEITEM",
          payload
     }
}

export const book_table = payload => {
     return {
          type: "BOOKTABLE",
          payload: payload 
     }
}

export const clear_tables = payload => {
     return {
          type: "CLEARTABLES",
          payload: payload 
     }
}

export const text_search = payload => {
     return {
          type: "TEXT",
          payload
     }
}

export const note_action = payload => {
     return {
          type: "NOTE_WARNING",
          payload
     }
}