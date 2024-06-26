
const router = require("express").Router();
// const userRoute = require('./user')
const authRoute = require('./authRoute')

const bookingRoute = require('./bookingRoute')
//  router.use('/auth', userRoute);
router.use('/user', authRoute)
router.use('/booking', bookingRoute)

 module.exports = router