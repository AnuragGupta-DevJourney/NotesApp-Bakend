import express from "express"
import "dotenv/config"
import notesRoute from "./routes/notes.route.js"
import mongoDB_connection from "./db/db_connection.js"
import rateLimiterMiddleware from "./middleware/rateLimit.middleware.js"
import cors from "cors"

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended : true}))

mongoDB_connection()   

app.use(rateLimiterMiddleware)   
app.use("/api",notesRoute)

const PORT = process.env.PORT || 3001

app.listen(PORT , () => {
    console.log(`Server Runing on port http://localhost:${PORT}`)
})   



