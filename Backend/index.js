import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import connectDB from './config/database.js'; 
import userRoute from './routes/userRoute.js';  
import cookieParser from 'cookie-parser';
import messageRoute from './routes/messageRoute.js';
import { app, server } from './socket/socket.js'; // Import the socket.io instance


dotenv.config({});

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,            //access-control-allow-credentials:true
  
}
app.use(cors(corsOptions));


//routes
app.use("/api/v1/user",userRoute); 
app.use("/api/v1/message",messageRoute);
 
server.listen(PORT, () => {
  connectDB();    
  console.log(`Server is running on the port ${PORT}`);
});