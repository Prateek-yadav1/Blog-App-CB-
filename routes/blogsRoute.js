const path=require('path');
const express=require('express');
const router=express.Router();
const controller=require('../controller/blogs');


router.get('/blogs',controller.getBlogs);

router.post('/blogs',controller.postBlogs);

router.get('/delete',controller.getDelete);
router.get('/update',controller.getUpdate);


module.exports=router;