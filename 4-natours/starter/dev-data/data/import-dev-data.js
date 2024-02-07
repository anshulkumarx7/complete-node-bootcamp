const fs=require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const Tour=require('../../models/tourModel');
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(con => {
    // console.log(con.connections)
    console.log('DB connection successful!')
})

//Read json file
const tours=JSON.parse(fs.readFileSync(`./dev-data/data/tours-simple.json`,'utf-8'));

//importing data

const importData=async()=>{
    try{
        await Tour.create(tours);
        console.log("Data created successfully");
    }catch(err){
        console.log(err)
    }
    process.exit();
}
//deleting data
const deleteData=async()=>{
    try{
        await Tour.deleteMany();
        console.log("Deleted successfully!");
    }catch(err){
        console.log(err);
    }
    process.exit();
}

if(process.argv[2]== "--import"){
    importData();
}
if(process.argv[2]== "--delete"){
    deleteData();
}