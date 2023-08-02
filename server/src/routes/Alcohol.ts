import express from 'express';
import controller from '../controllers/Alcohol';
import { ValidateSchema, Schema } from '../middleware/ValidateSchema';

const router = express.Router();
router.get('/get/:alcoholId', controller.readAlcohol);
router.get('/subcategory/:subcategory/:page', controller.readSubcategoryPage);
router.get('/subcategory/:subcategory', controller.readSubcategory);
router.get('/get', controller.readAllAlcohol);
router.post('/create', controller.createAlcohol);
router.patch('/update/:alcoholId', controller.readAlcohol);
router.delete('/delete/:alcoholId', controller.deleteAlcohol);

export = router;
