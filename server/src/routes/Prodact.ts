import express from 'express';
import controller from '../controllers/Prodact';
import { ValidateSchema, Schema } from '../middleware/ValidateSchema';

const router = express.Router();
router.get('/get/:page', controller.readProdact);
router.get('/get', controller.readAllProdact);
router.get('/count/:category/:subcategory', controller.countProdact);
router.get('/count/:category', controller.countProdact);
router.get('/count', controller.countProdact);
router.get('/categorys', controller.readCategorys);

export = router;
