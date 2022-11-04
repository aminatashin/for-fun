import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import listEndpoints from "express-list-endpoints"
import apiRouter from "../src/Api/index.js"
// ================================

const server = express()
const port  = process.env.PORT || 6000
server.use(cors())
server.use(express.json())
server.use("/api",apiRouter)
// ===============================
mongoose.connect(process.env.MONGOOSE_CONNECTION)
mongoose.connection.on(("connected"),()=>{
    console.log("mongoose is connecetd")
    server.listen(port,()=>{
            console.table(listEndpoints(server))
            
    })
})