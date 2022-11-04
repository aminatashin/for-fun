import express from "express"
import apiModel from "./Model.js"
// ============================
const apiRouter = express.Router()
apiRouter.post("/appointment",async(req,res,next)=>{
    try {
        const newAppointment =new apiModel(req.body)
        const {_id} = await newAppointment.save()
        res.send({_id})
    } catch (error) {
        console.log(error)
        next(error)
    }
})
apiRouter.get("/appointment",async(req,res,next)=>{
    try {
        const appointment = await apiModel.find()
        res.send(appointment)
    } catch (error) {
        console.log(error)
    }
})
apiRouter.get("/appointment/:id",async(req,res,next)=>{
    try {
        const appointment = await apiModel.findById(req.params.id)
        res.send(appointment)
    } catch (error) {
        console.log(error)
    }
})
apiRouter.put("/appointment/:id",async(req,res,next)=>{
    try {
        const findAppointment = await apiModel.findById(req.params.id,req.body,{new:true, runValidators:true})
res.send(findAppointment)
    } catch (error) {
        console.log(error)
    }
})
apiRouter.delete("/appointment/:id",async(req,res,next)=>{
    try {
        const deleteApi = await apiModel.findByIdAndDelete(req.params.id)
        res.send(deleteApi)
    } catch (error) {
        console.log(error)
    }
})
export default apiRouter