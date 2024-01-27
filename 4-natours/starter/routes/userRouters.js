const express =require('express');
const {getAllUsers,createUsers,getUserById,patchUser,deleteUser}=require('./../controllers/usersController');
const router=express.Router();

router.route('/').get(getAllUsers).post(createUsers);
router.route('/:id').get(getUserById).patch(patchUser).delete(deleteUser);

module.exports=router;