const fs=require('fs');
const express =require('express');
const app=express();
const morgan=require('morgan')
const tourRouter=require('./routes/tourRouters');
const userRouter=require('./routes/userRouters');

//Middlewares
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV =='development'){
    app.use(morgan('dev'));
}
app.use(express.json());
app.use((req,res,next)=>{
    console.log('Hello from the middleware');
    next();
})

app.use((req,res,next)=>{
    req.requestTime=new Date().toISOString();
    next();
})
app.use(express.static(`${__dirname}/public`));
// The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. 
// app.get('/',(req,res)=>{
//     // res.status(200).send('Hello from the server side');
//     res.status(200).json({message:'Hello from the server side',app:'Natours'});
// })

// app.post('/',(req,res)=>{
//     res.send('You can post to this endpoint');
// })


//Route handlers



//mounting multiple routes
app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);
// app.get('/api/v1/tours',getAllTours);
// app.get('/api/v1/tours/:id',getById);
// app.post('/api/v1/tours',createTour);
// app.patch('/api/v1/tours/:id',patchTour);
// app.delete('/api/v1/tours/:id',deleteTour);
//Routes

// app.route('/api/v1/users').get(getAllUsers).post(createUsers);
// app.route('/api/v1/users/:id').get(getUserById).patch(patchUser).delete(deleteUser);

module.exports=app;