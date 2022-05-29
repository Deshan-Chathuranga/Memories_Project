import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


//Import all routes

import postRoutes from './routes/posts.js';

const app =express();
app.use(express.json({
    type: "*/*" // optional, only if you want to be sure that everything is parsed as JSON. Wouldn't recommend
}));

app.use('/posts',postRoutes);

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

const CONNECTION_URL='mongodb+srv://deshbro1998:deshbro1998@cluster0.f4c3i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
   .then(()=>app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}`)))
   .catch((error)=>console.log(error.message));



