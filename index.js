import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connect } from './src/db/mysql.js';
import { userController } from './src/controller/user.controller.js';

dotenv.config();

const port = process.env.PORT || 3000
const app = express();

app.use(express.json())

const conect = await connect();

app.post('/create/user', userController.crear);
app.post('/login/user', userController.login)

app.listen(port, () => {
    console.log('Escuchando en el puerto', port)
})