const router = require('express').Router();
const ExpressError = require('../utils/ExpressError')
const wrapAsync = require('../utils/wrapAsync')
const User = require('../models/user.model')
const Lists = require('../models/list.model')
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwtSecret = process.env.JWT_SECRET


router.post('/addTask', wrapAsync(async(req, res)=>{
let {}
}))

module.exports = router;