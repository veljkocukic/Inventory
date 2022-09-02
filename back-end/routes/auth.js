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
      const { email, username, password } = req.body;
      const emailCheck = await User.findOne({ email });
      const usernameCheck = await User.findOne({ username });
      let errors = {};
      if (emailCheck) {
        errors.email = 'E-mail already in use';
      }
      if (usernameCheck) {
        errors.username = 'Username already in use';
      }
      if (Object.keys(errors).length > 0) {
        res.status(400).send(errors);
        return;
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({
        username,
        password: hashedPassword,
        email,
      });

      const user = await newUser.save();
      delete user.password;
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_CODE);
      res.status(200).json({ token, user });
    } else {
      let obj = {};
      if (req.body.password.length < 1) {
        obj.password = 'Invalid password';
      }
      if (req.body.email.length < 1) {
        obj.email = 'Invalid e-mail';
      }
      if (req.body.username.length < 1) {
        obj.username = 'Invalid username';
      }
      res.status(400).json(obj);
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
      let errors = {};
      const user = await User.findOne({ email });
      if (!user) {
        errors.email = 'Wrong e-mail.';
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        errors.password = 'Wrong password.';
      }
      if (Object.keys(errors).length > 0) {
        res.status(400).json(errors);
        return;
      }
      delete user.password;
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_CODE);
      res.status(200).json({ token, user });
    } else {
      let errors = {};

      if (!req.body.email || req.body.email.length < 0) {
        errors.email = 'Invalid e-mail';
      }
      if (!req.body.password || req.body.email.password) {
        errors.password = 'Invalid password';
      }
      res.status(400).json(errors);
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
    console.log(error);
    res.status(500).json(error);
  }
});

router.patch('/edit/:id', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_CODE);
    const userId = decodedToken.id;
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json('User not found');
      return;
    } else if (user._id.toString() !== userId) {
      res.status(400).json('You can only edit your account');
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const request = req.body;
    const hashedPassword = await bcrypt.hash(request.password, salt);
    request.password = hashedPassword;
    await User.findByIdAndUpdate({ _id: user._id }, { ...request })
      .then((resp) => {
        res.status(200).send(resp);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
