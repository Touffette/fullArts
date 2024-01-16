//,nomdelafonction.single("kitPic")
const express = require('express');
const authController= require('../controllers/auth')
const uploadPhotoP=require('../middlewares/multerSingle')

router.post('/signup',uploadPhotoP.single('file'),authController.signUp);
router.post('/login',authController.login);

module.exports = router;