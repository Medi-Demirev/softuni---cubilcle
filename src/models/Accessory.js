const mongoose = require('mongoose');

   
const accessorySchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },

    imageUrl:{
        type: String,
        required: true,
        /*validate:{
            validator: /^https/g,
            message: 'ImageUrl should start with http/s'
        }*/
    },
    description:{
        type: String,
        required: true,
        maxlength: 120,
    },
    cubes:[
        {
        type:mongoose.Types.ObjectId,
        ref: 'Cube'
        }
     ]

})
accessorySchema.path('imageUrl').validate(function() {
    return this.imageUrl.startsWith('https');
}, 'Image url should be a link');

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;