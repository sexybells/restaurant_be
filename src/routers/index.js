
const router = require("express").Router();
// const userRoute = require('./user')
const authRoute = require('./authRoute')
//  router.use('/auth', userRoute);
router.use('/user', authRoute)

 module.exports = router