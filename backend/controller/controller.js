const utils = require('../utils/utils');
const EventModel = require('../models/event')

exports.createEvent = async (req, res, next) => {
    try{
        utils.checkError(req);
        const eventData = new EventModel(req.body);
        const data = await eventData.save();
    
        res.status(201).json({ status: 201, success: true, data})
    }
    catch(err){
        res.status(500).json({status:500, success: false, message:err})
    }
}
