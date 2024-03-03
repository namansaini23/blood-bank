import dotenv from 'dotenv'
dotenv.config()
import express  from 'express'
import cors from 'cors';
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
import bloodBankRoutes from './routes/bloodBankRoutes.js'
import userModel from './models/user.js';
const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
//cors  policy
app.use(cors())

//databace collection
connectDB(DATABASE_URL)

// jason
app.use(express.json())

// load routes
app.use("/api/user", userRoutes)

// user profile routes
app.use("/api/user", userRoutes);


app.use("/api/bloodbank", bloodBankRoutes);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})