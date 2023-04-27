// const mongoose = require('../connection');

const { Types } = require('mongoose');
const {Schema, model} = require('../connection');     //import connection.js file
// importing schema and model from mongoose framework


const mySchema = new Schema({
    comp_name : String,
    comp_contact : Number,
    comp_email : String,
    about_comp : String,
    user : {type : Types.ObjectId, ref : 'users'}
})


module.exports = model('company', mySchema);                           //users is name of Collection






