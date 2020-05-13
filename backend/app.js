const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const UsersRoutes = require('./routes/UsersRoutes')

const app = express()

app.use(express.json({extended:true}))


app.use('/api',UsersRoutes)


const PORT = config.get('port') || 5000

async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        app.listen(PORT,()=> console.log(`Backend Server has been started on port ${PORT} ...`))
    }catch(e){
        console.log('SERVER ERROR:',e.message)
        process.exit(1)
    }
}

start()