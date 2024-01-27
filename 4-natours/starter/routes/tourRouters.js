const express =require('express');
const {getAllTours,createTour,getById,deleteTour,patchTour, checkId,checkBody}=require('./../controllers/tourControllers');

const router=express.Router();

router.param('id',checkId);


router.route('/').get(getAllTours).post(checkBody,createTour);
router.route('/:id').get(getById).patch(patchTour).delete(deleteTour);


module.exports=router;