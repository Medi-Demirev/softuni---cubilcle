const fs = require('fs/promises');
const path = require('path');

const cubes = require("../db.json");

exports.getOne = (cubeId)=> cubes[cubeId]

exports.save = (cube)=>{
    cubes.push(cube);

    return fs.writeFile(path.resolve('src','db.json'), JSON.stringify(cubes,'', 4), {encoding: 'utf-8'})
}