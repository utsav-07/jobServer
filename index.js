import express from 'express';

import cors from 'cors'

const app = express();

app.use(cors());

import dataRouter from './routes/data.routes.js';


app.use(express.json({limit  : '50mb'}));

app.get('/' , (req ,  res) => {
    res.send({message : 'Hellow world'})
})



app.use('/api' , dataRouter);


const startServer =  async () => {
    try{
        app.listen(8081 ,() => console.log('server started'))
    }catch(err){
        console.log(err);
    }
}

startServer();