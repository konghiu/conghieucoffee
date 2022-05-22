import { combineReducers } from "redux";
import storeReducer from "./storeReducer";
import bookTablesReducer from "./bookTablesReducer";
import searchReducer from './searchReducer'
import noteReducer from "./noteReducer";
import registerReducer from "./registerReducer";

const allReducer = combineReducers({
     register: registerReducer,
     storeBooks: storeReducer,
     bookTables: bookTablesReducer,
     textSearch: searchReducer,
     noteAction: noteReducer
})


export default allReducer

