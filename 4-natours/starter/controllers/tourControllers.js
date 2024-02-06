const fs = require('fs');
const express = require('express');
const Tour = require('../models/tourModel');
// const tours=JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

// exports.checkId=(req,res,next,val)=>{
//     console.log(val);
//     if(val > tours.length-1){
//         return res.status(404).json({
//             status:"failed",
//             message:"Invalid ID"
//         })
//     }
//     next();
// }
exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'failed',
            message: 'Missing name or price'
        })
    }
    next();
}
exports.getAllTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json({
            status: "Success",
            requestedAt: req.requestTime,
            result: tours.length,
            data: {
                tours
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            messgae: err
        })

    }

}
exports.getById = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        // const tour = await Tour.findOne({name:req.params.id});
        // const tour = await Tour.findOne({_id:req.params.id});
        res.status(200).json({
            status: "Success",
            data: {
                tour
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            messgae: err
        })
    }
}
exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }


    // const newId=tours[tours.length-1].id+1;
    // const newTour=Object.assign({id:newId},req.body);
    // tours.push(newTour);
    // fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err =>{
    //     res.status(201).json({
    //         status:"success",
    //         data:newTour
    //     })
    // })
}
exports.patchTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: "Success",
            data: {
                tour
            }
        })

    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })

    }

}
exports.deleteTour = async(req, res) => {
    try{
        await Tour.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status:"Success",
            data:null
        });

    }catch(err){
        res.status(404).json({
            status:"fail",
            data:err
        });
    }
    
}