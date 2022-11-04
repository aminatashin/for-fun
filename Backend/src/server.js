import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import listEndpoints from "express-list-endpoints"
// ================================

const server = express()
const port  = process.env.PORT || 6000
server.use(cors())
// ===============================
mongoose.connect(process.env.MONGOOSE_CONNECTION)
mongoose.connection.on(("connected"),()=>{
    console.log("mongoose is connecetd")
    server.listen(port,()=>{
            console.table(listEndpoints(server))
            
    })
})