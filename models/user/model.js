const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lang: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false      //for the first time a user logs in
    }
})

module.exports= mongoose.model('User', userSchema)