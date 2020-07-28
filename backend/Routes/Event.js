const express = require('express');
const router = express.Router();
const EventDetails = require('../Models/EventTable');

//get all item details
router.get('/',async (req,res)=>{

    try{
        const event = await EventDetails.find();
        res.json(event);
    }catch(err){
        res.json({message:err})
    }
})

//get specific item
router.get('/:id',async (req,res)=>{
    try{
        const specificEvent = await EventDetails.findById(req.params.id);
        res.json(specificEvent);
    }catch(err){
        res.json({message:err});
    }
})

//submit item details
router.post('/',(req,res)=>{
    const event = new EventDetails({
        ename:req.body.ename,
        edate:req.body.edate,
        etime:req.body.etime,
        ecategory:req.body.ecategory,
        eplace:req.body.eplace,
        edetails:req.body.edetails,
        eticket:req.body.eticket,
    });

    console.log(req.body);

    event.save()
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
        const updateEvent =await EventDetails.updateOne({_id:req.params.id},
            {$set : {
                ename:req.body.ename,
                edate:req.body.edate,
                etime:req.body.etime,
                ecategory:req.body.ecategory,
                eplace:req.body.eplace,
                edetails:req.body.edetails,
                eticket:req.body.eticket,
                }});
        
            res.json(updateEvent);


    }catch(err){
        res.json({message:err});
    }
})

//delete item details
router.delete('/:id',async (req,res)=>{
    try{
        const deleteEvent =await EventDetails.remove({_id: req.params.id});
        res.json(deleteEvent);
    }catch(err){
        res.json({message:err});
    }
})


module.exports=router;