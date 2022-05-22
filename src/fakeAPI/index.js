import { createServer } from "miragejs"
import { products } from "./fileProducts"
import { tables } from "./fileTable"

export const setupAPI = () => {
     let server = createServer()
     server.get("/api/products", { products: products})
     server.get("/api/tables", {tables: tables})
}  
