const express = require('express');
const router = express.Router();
const UserDetails = require('../Models/UserTable');

//get all item details
router.get('/',async (req,res)=>{

    try{
        const user = await UserDetails.find();
        res.json(user);
    }catch(err){
        res.json({message:err})
    }
})

//get specific item
router.get('/:id',async (req,res)=>{
    try{
        const specificUser = await UserDetails.findById(req.params.id);
        res.json(specificUser);
    }catch(err){
        res.json({message:err});
    }
})

//submit item details
router.post('/',(req,res)=>{
    const user = new UserDetails({
        email:req.body.email,
        password:req.body.password,
        username:req.body.username,
        phone:req.body.phone,
    });

    console.log(req.body);

    user.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json({message:err})
    })
})

//update item details
router.put('/:id',async (req,res)=>{
    try{
        const updateUser =await UserDetails.updateOne({_id:req.params.id},
            {$set : {
                    email:req.body.email,
                    password:req.body.password,
                    username:req.body.username,
                    phone:req.body.phone,
                   
                }});
        
            res.json(updateUser);


    }catch(err){
        res.json({message:err});
    }
})

//delete item details
router.delete('/:id',async (req,res)=>{
    try{
        const deleteUser =await UserDetails.remove({_id: req.params.id});
        res.json(deleteUser);
    }catch(err){
        res.json({message:err});
    }
})


module.exports=router;