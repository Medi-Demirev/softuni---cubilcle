const mongoose = require('mongoose'); 

const cubeSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    descryption:{
        type:String,
        required: true,
        maxlength: 120,
    },
    imageUrl:{
        type:String,
        required: true,
    },
    difficultyLevel:{
        type: Number,
        required: true,
        min: 1,
        max: 6,
    }
});

cubeSchema.path('iamgeUrl').validate(function () {
    return this.imageUrl.startsWith('http', 'image url should be a link' )
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;