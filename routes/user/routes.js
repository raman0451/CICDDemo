const { request, response } = require('express')
const express= require('express')
const router= express.Router()
const User= require('../../models/user/model')

router.get('/', async(request, response)=> { 
   try{
    const user= await User.find()
    response.json(user)
   } catch(error) {
    response.send(error)
   }
})

router.get('/:id', async(request, response)=> {   //get a particular user
    try{
     const user= await User.findById(request.params.id)
     response.json(user)
    } catch(error) {
     response.send(error)
    }
 })

router.post('/', async(request, response)=> {
    const user= new User({
        name: request.body.name,
        lang: request.body.lang,
        sub: request.body.sub
    })

    try {
        const u1= await user.save()
        response.json(u1)
        
    } catch (error) {
        response.send(error)
        
    }
})

router.patch('/:id', async(request, response)=> {
    try {
        const user= await User.findById(request.params.id)
        user.sub= request.body.sub

        const u1= await user.save()
        response.json(u1)
        
    } catch (error) {
        console.error(error)
        
    }
})

module.exports= router