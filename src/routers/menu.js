const multer = require('multer');
const upload = multer({ storage: storage });
const router = require("express").Router();
const {createMenu, menuList} = require('../components/Menu')
router.post('/create', upload.single('image'), createMenu)
router.get('/', menuList)