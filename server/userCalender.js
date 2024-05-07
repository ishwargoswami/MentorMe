const mongoose = require('mongoose');

const userCalendarSchema = new mongoose.Schema({
  bp: String,
  np: String,
  gm: Boolean,
  meetLink: String,
  reschedulePolicy: String,
  minimumNotice: String
});

const UserCalendar = mongoose.model('UserCalendar', userCalendarSchema);

module.exports = UserCalendar;
