const { Types } = require('mongoose');
const {Schema, model} = require('../connection');     

const mySchema = new Schema({
    jobType : String,
    reg_Link : String,
    lastDate : Date,
    course_branch : String,
    batch : Number,
    salary : Number,
    designation : String,
    roles_responsibility : String,
    selectionProcess : String,
    interviewLocation : String,
    skillsRequired : String,
    user : {type : Types.ObjectId, ref: 'users'}
}) 

module.exports = model('jobs', mySchema);                           