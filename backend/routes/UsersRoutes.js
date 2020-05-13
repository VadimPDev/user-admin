const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')
const router = new Router()

router.post('/register',async(req,res)=>{
    try{
        const {email,password} = req.body

        const candidate = await User.findOne({email})
        if(candidate){
            return res.status(400).json({message:'Такой пользователь уже сущесвует'})
        }else{
            const hashedPassword = await bcrypt.hash(password,12)
            const user = new User({email,password:hashedPassword})
            await user.save()
            return res.status(201).json({message:'Пользователь создан'})
        }


    }catch(e){
        return res.status(500).json({message:'Неверный данные'})
    }
})

router.post('/login',async(req,res)=>{
    try{
        const {email,password} = req.body

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:'Такого пользователя не существует'})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).json({message:"Неверный пароль"})
        }

        const token = jwt.sign({userId:user.id},config.get('jwtSecret'),{expiresIn:'1h'})

        return res.status(200).json({token,userid:user.id,email:user.email})

    }catch(e){
        return res.status(500).json({message:'Неверный данные'})
    }
})


router.get('/getUsers',async(req,res)=>{
    try{
        const users = await User.find()
        return res.status(200).json(users)
    }catch(e){
        return res.status(500).json({message:'Неверный данные'})
    }
})


module.exports = router