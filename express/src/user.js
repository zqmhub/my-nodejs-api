import express from 'express';
const router = express.Router();
router.post('/login',(req,res)=>{
    res.end('login success')
})
router.post('/register',(req,res)=>{
    res.end('register success')
})
export default router;