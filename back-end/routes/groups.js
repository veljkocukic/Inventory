const router = require('express').Router();
const Group = require('../models/Group');

router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
  try {
    const allGruops = await Group.find({});
    res.status(200).send(allGruops);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleGropu = await Group.findById(req.params.id);
    res.status(200).send(singleGropu);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleGropu = await Group.findById(req.params.id);
    res.status(200).send(singleGropu);
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
