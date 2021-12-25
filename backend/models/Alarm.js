const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Alarm = new Schema({
   name: {
      type: String
   },
   type: {
      type: Number
   },
   description: {
      type: String
   },
   time : { type : Date, default: Date.now },
   status:{
      type: String
   }
}, {
   collection: 'alarms'
})

module.exports = mongoose.model('Alarm', Alarm)