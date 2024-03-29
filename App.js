import express from 'express';
import Hello from './Hello.js';
import Lab5 from "./Lab5.js";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
Lab5(app);
Hello(app);
app.get('/hello', (req, res) => {
    res.send('Life is good!')
 });
 app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')
 });
 
app.listen(4000);