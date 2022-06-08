const mongoose = require('mongoose');

   
const accessorySchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },

    imageUrl:{
        type: String,
        required: true,
        validate:{
            validator: /^https?/g,
            message: 'ImageUrl should start with http/s'
        }
    },
    description:{
        type: String,
        required: true,
        maxlength: 120,
    },
    cube:{
        type:mongoose.Types.ObjectId,
        ref: 'Cube'
    }

})

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;