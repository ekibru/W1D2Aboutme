const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

//Rest Api
router.get('/', productController.getAll);
router.post('/', productController.save);
router.delete('/:productId', productController.deleteById);
router.put('/:productId', productController.edit)


module.exports = router;