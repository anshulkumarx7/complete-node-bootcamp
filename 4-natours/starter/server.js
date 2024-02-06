//Start server
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const tour=require('./models/tourModel');
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(con => {
    // console.log(con.connections)
    console.log('DB connection successful!')
})



// const testTour=new Tour({
//     name:'The Forest Hiker',
//     rating:4.7,
//     price:497
// });
 
// testTour.save().then(doc=>{
//     console.log(doc);
// }).catch(err=>{
//     console.log('Error:',err);
// })
// console.log(process.env)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`)
});