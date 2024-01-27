const fs=require('fs');
const tours=JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

exports.getAllUsers=(req,res)=>{
    res.status(500).json({
        status:'Success',
        message:'This endpoint is for testing purpose!!'
    })
}
exports.createUsers=(req,res)=>{
    res.status(500).json({
        status:'Success',
        message:'This endpoint is for testing purpose!!'
    })
}
exports.getUserById=(req,res)=>{
    res.status(500).json({
        status:'Success',
        message:'This endpoint is for testing purpose!!'
    })
}
exports.patchUser=(req,res)=>{
    res.status(500).json({
        status:'Success',
        message:'This endpoint is for testing purpose!!'
    })
}
exports.deleteUser=(req,res)=>{
    res.status(500).json({
        status:'Success',
        message:'This endpoint is for testing purpose!!'
    })
}