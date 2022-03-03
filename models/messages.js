const mongoose = require('mongoose');
const msgSchema = new mongoose.Schema({
    msg:{
        type: String,
        required: false
    }
})

const Msg = mongoose.model('msg', msgSchema)
module.exports = Msg;
