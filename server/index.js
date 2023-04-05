import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './Config/db.js';
import classRouter from './Routes/classRouter.js';
import schoolRouter from './Routes/schoolRouter.js';
import studentRouter from './Routes/studentRouter.js';
import teacherRouter from './Routes/teacherRouter.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('api/school', schoolRouter);
app.use('api/student', studentRouter);
app.use('api/class', classRouter);
app.use('api/teacher', teacherRouter);


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
