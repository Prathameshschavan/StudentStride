import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './Config/db.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to StudentStride Server'
    })
})


const startServer = () => {
    app.listen(process.env.PORT, () => {
        console.log('Server listening on port ' + process.env.PORT);
        connectDB();
    })
}
startServer();
