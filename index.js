const express=require("express")
const bodyparser=require("body-parser")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())
app.use(bodyparser.json())

connectDB()