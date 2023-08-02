import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import products from '../models/Products';
import Logging from '../library/Logging';

const createAlcohol = (req: Request, res: Response, next: NextFunction) => {
    const { title, price, description, image, percent, category, subcategory, volume } = req.body;

    const alcohol = new products({
        _id: new mongoose.Types.ObjectId(),
        title: title,
        price: price,
        description: description,
        image: image,
        percent: percent,
        category: category,
        subcategory: subcategory,
        volume: volume
    });

    return alcohol
        .save()
        .then((alcohol) => res.status(201).json({ alcohol }))
        .catch((error) => res.status(500).json({ error }));
};

const readAlcohol = (req: Request, res: Response, next: NextFunction) => {
    const alcoholId = req.params.alcoholId;

    return products
        .findById(alcoholId)
        .then((alcohol) => (alcohol ? res.status(200).json({ alcohol }) : res.status(404).json({ message: 'Not fond' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllAlcohol = (req: Request, res: Response, next: NextFunction) => {
    return products
        .find({ category: 'Alcohol' })
        .then((alcohol) => res.status(200).json({ alcohol }))
        .catch((error) => res.status(500).json({ error }));
};

const updateAlcohol = (req: Request, res: Response, next: NextFunction) => {
    const alcoholId = req.params.alcoholId;

    return products
        .findById(alcoholId)
        .then((alcohol) => {
            if (alcohol) {
                alcohol.set(req.body);
                return alcohol
                    .save()
                    .then((prodact) => res.status(201).json({ prodact }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: 'Not fond' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteAlcohol = (req: Request, res: Response, next: NextFunction) => {
    const alcoholId = req.params.alcoholId;

    return products
        .findByIdAndDelete(alcoholId)
        .then((alcohol) => (alcohol ? res.status(201).json({ essage: 'delete' }) : res.status(404).json({ message: 'Not fond' })))
        .catch((error) => res.status(500).json({ error }));
};

const readSubcategoryPage = (req: Request, res: Response, next: NextFunction) => {
    const subcategory = req.params.subcategory;
    const page = req.params.page;
    Logging.info('readSubcategoryPage ' + subcategory + ' ' + page);
    return products
        .find({ category: 'Alcohol', subcategory: subcategory })
        .sort({ _id: 1 })
        .skip(parseInt(page) * 16)
        .limit(16)
        .then((product) => res.status(200).json({ product }))
        .catch((error) => res.status(500).json({ error }));
};
const readSubcategory = (req: Request, res: Response, next: NextFunction) => {
    const subcategory = req.params.subcategory;
    Logging.info('readSubcategory ' + subcategory);

    return products
        .find({ category: 'Alcohol', subcategory })
        .then((product) => res.status(200).json({ product }))
        .catch((error) => res.status(500).json({ error }));
};
export default { createAlcohol, readAlcohol, readAllAlcohol, updateAlcohol, deleteAlcohol, readSubcategory, readSubcategoryPage };
