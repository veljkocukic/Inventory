const router = require('express').Router();
const Group = require('../models/Group');
const Item = require('../models/Item');

router.post('/:groupId/add', async (req, res) => {
  try {
    const itemGroup = await Group.findById(req.params.groupId);
    const response = await itemGroup.updateOne({
      $push: { items: req.body.item },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:groupId/:itemId', async (req, res) => {
  try {
    const item = await Group.findById(req.params.groupId)
      .select('items')
      .findById(req.params.itemId);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
