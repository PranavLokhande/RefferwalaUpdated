
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, verifyOTP,verifyCompanyEmail, sendOTP,forgotPassword, getFollowers, getFollowing, resetPassword, resendOTP , getAllProfiles, getProfileById, getProfileByEmail, updateProfileById, followUser, unfollowUser, delectUserActivity, getNotifications, getDelect, searching} = require('../controllers/UserController');

const jwtMiddleware = require('../middleware/jwtMiddleware'); 

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/verify-otp', verifyOTP);
router.post('/verifyCompanyEmail', jwtMiddleware,verifyCompanyEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword); 
router.post('/resend-otp', resendOTP);
router.post('/sendOTP', jwtMiddleware, sendOTP)
router.get('/profile/:id', jwtMiddleware, getProfileById);
router.get('/profile/email/:email', jwtMiddleware,getProfileByEmail);
router.get('/profiles', getAllProfiles);
router.put('/profile/:id', jwtMiddleware, updateProfileById);
router.post('/follow/:id',jwtMiddleware, followUser);
router.post('/unfollow/:id',jwtMiddleware, unfollowUser);
router.get('/notifications/:userId',jwtMiddleware, getNotifications);
router.get('/:id/followers', jwtMiddleware, getFollowers);
router.get('/:id/following', jwtMiddleware, getFollowing);
router.delete('/delete/:id', getDelect); //to delete the user and it's activity
router.post('/search', searching);


module.exports = router;
