const  mongoose  = require('mongoose')

const Cube = require('../models/Cube');


exports.getAll =   (search = '', fromInput, toInput) => {
  
  let cubes = Cube.find().lean()
  console.log(mongoose.Types.ObjectId.isValid('629e4a4aa4129e17f38a179e'));
  //  const from = Number(fromInput) || 0;
  //  const to = Number(toInput) || 6;
  //  const result = cubes
  // // .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to)
 
  return cubes
    
}

exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.create = (cube) => Cube.create(cube);
   