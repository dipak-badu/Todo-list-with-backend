const router = require('express').Router();
const ExpressError = require('../utils/ExpressError')
const wrapAsync = require('../utils/wrapAsync')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwtSecret = process.env.JWT_SECRET


const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required()
});

router. post("/register", wrapAsync(async(req, res)=>{
    
        const {email, username, password} = req.body;
        if(!email || !username || !password){
            throw new ExpressError("All filds are required!!", 400)
        }

  //        const { error } = registerSchema.validate(req.body);
  // if (error) {
  //   throw new ExpressError(error.details[0].message, 400);
  // }
        // check if user already exists 
        const existingUser = await User.findOne({username})
        if(existingUser){
            throw new ExpressError("User with this username already exists", 409);
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = new User({
            email,
            username, 
            password: hashedPassword
        })
        await newUser.save();

        const token = jwt.sign(
            {userId : newUser._id, email: newUser.email}, 
            jwtSecret, 
            {expiresIn: "1h"}
        )

        res.status(201).json({
            message: "User registered successfully",
            token,
            user:{
                _id :newUser._id,
                email:newUser.email,
                username:newUser.username
            }
        })
}))


// login 


router.post('/login', wrapAsync(async (req, res) => {
  const { emailOrUsername, password } = req.body;

  if(!emailOrUsername || !password){
            throw new ExpressError("All filds are required!!", 400)
        }
  // Validate input
  // const { error } = loginSchema.validate(req.body);
  // if (error) {
  //   throw new ExpressError(error.details[0].message, 400);
  // }

  // Find user by email OR username
  const user = await User.findOne({
    $or: [
      { email: emailOrUsername },
      { username: emailOrUsername }
    ]
  });

  if (!user) {
    throw new ExpressError("Invalid email or username", 401);
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new ExpressError("Invalid password", 401);
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user._id, email: user.email },
  jwtSecret,
    { expiresIn: '1h' }
  );

  res.status(200).json({
    message: "Login successful",
    token,
    user: {
      _id: user._id,
      email: user.email,
      username: user.username
    }
  });
}));

module.exports = router;