const router = require('express').Router();
const Group = require('../models/Group');
const auth = require('../middleware/auth');
const { response } = require('express');

router.post('/', auth, async (req, res) => {
  try {
    const newGroup = new Group({
      name: req.body.name,
      items: req.body.items,
    });

    await newGroup.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const allGruops = await Group.find({});
    res.status(200).send(allGruops);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const singleGroup = await Group.findById(req.params.id);
    res.status(200).send(singleGroup);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.patch('/edit/:id', auth, async (req, res) => {
  const request = req.body;
  delete request.id;
  try {
    await Group.findByIdAndUpdate({ _id: req.body.id }, { ...request })
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
