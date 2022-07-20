const express= require('express')
const mongoose= require('mongoose')

const app= express()  //start express

const url= 'mongodb://0.0.0.0/UsersDb'

mongoose.connect(url, {useNewUrlParser: true}) //useNewUrlParser is to avoid some warnings

const con= mongoose.connection

con.on('open', function(){
    console.log('Database connected...')
})    //check connection on nodemon

app.use(express.json())    //to tell the app that user will enter data in JSON format

const userRouter= require('./routes/user/routes') 
app.use('/user', userRouter)


app.listen(3000, function(){
    console.log('Server Started on port 4000')
})