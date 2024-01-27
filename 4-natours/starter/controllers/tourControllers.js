const fs=require('fs');
const express =require('express');

const tours=JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

exports.checkId=(req,res,next,val)=>{
    console.log(val);
    if(val > tours.length-1){
        return res.status(404).json({
            status:"failed",
            message:"Invalid ID"
        })
    }
    next();
}
exports.checkBody=(req,res,next)=>{
    if(!req.body.name || !req.body.price){
        return res.status(400).json({
            status:'failed',
            message:'Missing name or price'
        })
    }
    next();
}
exports.getAllTours=(req,res)=>{
    console.log(req.requestTime);
    res.status(200).json({
        status:"Success",
        result:tours.length,
        requestedAt:req.requestTime,
        data:{
            tours
        }
    })
}
exports.getById=(req,res)=>{
    const tour=tours.find(el => el.id ===id);
    res.status(200).json({
        status:"success",
        data:tour
    })
}
exports.createTour=(req,res)=>{
    const newId=tours[tours.length-1].id+1;
    const newTour=Object.assign({id:newId},req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err =>{
        res.status(201).json({
            status:"success",
            data:newTour
        })
    })
}
exports.patchTour=(req,res)=>{
    
    res.status(200).json({
        status:"Success",
        data:{
            tour:"<Updated ..>"
        }
    })
}
exports.deleteTour=(req,res)=>{
    res.status(204).json({
        status:"success",
        data:null
    })
}