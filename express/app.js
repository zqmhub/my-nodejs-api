import express from 'express';
import User from './src/user.js';
import loggerMiddleware from './middleware/logger.js';
const app = express();
app.use(loggerMiddleware);
app.use(express.json());
app.use('/user',User);

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})
