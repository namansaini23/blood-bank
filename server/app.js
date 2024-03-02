import dotenv from 'dotenv'
dotenv.config()
import express  from 'express'
import cors from 'cors';
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
<<<<<<< HEAD
=======
import bloodBankRoutes from './routes/bloodBankRoutes.js'
>>>>>>> parent of 8968ed1 (new changes)
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

<<<<<<< HEAD
// load routes
app.use("/api/user", userRoutes)


=======
// user profile routes
app.use("/api/user", userRoutes);


app.use("/api/bloodbank", bloodBankRoutes);

>>>>>>> parent of 8968ed1 (new changes)
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})