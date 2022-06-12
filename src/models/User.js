const { default: mongoose } = require('mongoose');
const momgoose = require('mongoose'); 

const userSchema = new momgoose.Schema({

username:{
    type: String,
    required: true,
},

password: {
    type: String,
    required:true,
}
});

const User = mongoose.model('User', userSchema);

module.exports = User;