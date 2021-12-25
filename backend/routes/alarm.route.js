const express = require('express');
const app = express();
const alarmRoute = express.Router();

// Alarm model
let Alarm = require('../models/Alarm');

// Add Alarm
alarmRoute.route('/create').post((req, res, next) => {
  let alarmData = {
    name : 'Alarm'+Math.floor(Math.random() * 10000),
    description : 'Alarm'+Math.floor(Math.random() * 10000),
    type : Math.floor(Math.random() * 3) + 1,
    status : 'Open'

  }
  Alarm.create(alarmData, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Alarms
alarmRoute.route('/').get((req, res) => {
  Alarm.find({}).sort({time: 'desc'}).exec((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



module.exports = alarmRoute;