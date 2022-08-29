const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const checkMail = require('../helpers');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  try {
    if (
      req.body.password &&
      req.body.email &&
      req.body.username &&
      checkMail(req.body.email) &&
      req.body.username.length >= 7 &&
      req.body.password.length >= 7
    ) {
      const salt = await bcrypt.genSalt(10);
      const { email, username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({
        username,
        password: hashedPassword,
        email,
      });

      const response = await newUser.save();
      const token = jwt.sign({ id: response._id }, process.env.TOKEN_CODE);
      res.status(200).json(token);
    } else {
      res.status(400).send('Validation failed');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    if (
      req.body.email &&
      checkMail(req.body.email) &&
      req.body.password &&
      req.body.password.length >= 7
    ) {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      !user && res.status(404).json('Wrong email');

      const validPassword = await bcrypt.compare(password, user.password);
      !validPassword && res.status(400).json('Wrong password');
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_CODE);
      res.status(200).json(token);
    } else {
      res.status(400).send('Validation failed');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;