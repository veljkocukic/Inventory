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

      const user = await newUser.save();
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_CODE);
      res.status(200).json({ token, user });
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
      if (!user) {
        res.status(404).json('Wrong email');
        return;
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        res.status(400).json('Wrong password');
        return;
      }
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_CODE);
      res.status(200).json({ token, user });
    } else {
      res.status(400).send('Validation failed');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    delete user.password;
    res.status(200).send(user);
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
