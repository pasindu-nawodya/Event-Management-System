const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    ename:{type:String,required:true},
    edate:{type:String,required:true},
    etime:{type:String,required:true},
    ecategory:{type:String,required:true},
    eplace:{type:String,required:true},
    edetails:{type:String,required:true},
    eticket:{type:String,required:true},
    
});

module.exports=mongoose.model('Event',EventSchema);