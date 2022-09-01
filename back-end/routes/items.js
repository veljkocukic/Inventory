const router = require('express').Router();
const Group = require('../models/Group');
const Item = require('../models/Item');
const auth = require('../middleware/auth');

router.post('/:groupId/add', auth, async (req, res) => {
  try {
    const newItem = new Item({ ...req.body });
    const savedItem = await newItem.save();
    const itemGroup = await Group.findById(req.params.groupId);
    const response = await itemGroup.updateOne({
      $push: { items: savedItem._id },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:groupId/:itemId', auth, async (req, res) => {
  try {
    const item = await Group.findById(req.params.groupId)
      .select('items')
      .findById(req.params.itemId);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.patch('/edit/:id', auth, async (req, res) => {
  const request = req.body;
  delete request._id;
  try {
    await Item.findByIdAndUpdate({ _id: req.body._id }, { ...request })
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
