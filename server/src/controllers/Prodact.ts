import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import products from '../models/Products';
const readProdact = (req: Request, res: Response, next: NextFunction) => {
    const page = req.params.page;

    return products
        .find()
        .sort({ _id: 1 })
        .skip(parseInt(page) * 16)
        .limit(16)
        .then((product) => res.status(200).json({ product }))
        .catch((error) => res.status(500).json({ error }));
};

const countProdact = (req: Request, res: Response, next: NextFunction) => {
    const category = req.params.category;
    const subcategory = req.params.subcategory;
    const heveCategory = category !== undefined;
    const heveSubcategory = subcategory !== undefined;

    const query = {
        ...(heveCategory && { category }),
        ...(heveSubcategory && { subcategory })
    };
    return products
        .count(query)
        .then((numOfProdact) => res.status(200).json({ numOfProdact }))
        .catch((error) => res.status(500).json({ error }));
};

const readAllProdact = (req: Request, res: Response, next: NextFunction) => {
    return products
        .find({})
        .then((alcohol) => res.status(200).json({ alcohol }))
        .catch((error) => res.status(500).json({ error }));
};
const readCategorysOld = (req: Request, res: Response, next: NextFunction) => {
    return products
        .aggregate([
            {
                $group: {
                    _id: '$category',
                    subcategories: { $addToSet: '$subcategory' }
                }
            },
            {
                $project: {
                    _id: 0,
                    category: '$_id',
                    subcategories: 1
                }
            }
        ])
        .then((categorys) => res.status(200).json({ categorys }))
        .catch((error) => res.status(500).json({ error }));
};

const readCategorys = (req: Request, res: Response, next: NextFunction) => {
    return products
        .aggregate([
            {
                $group: {
                    _id: { category: '$category', subcategory: '$subcategory' },
                    image: { $first: '$image' }
                }
            },
            {
                $group: {
                    _id: '$_id.category',
                    subcategories: { $addToSet: { subcategory: '$_id.subcategory', image: '$image' } }
                }
            },
            {
                $project: {
                    _id: 0,
                    category: '$_id',
                    subcategories: 1
                }
            }
        ])
        .then((categories) => res.status(200).json({ categories }))
        .catch((error) => res.status(500).json({ error }));
};

export default { readProdact, readAllProdact, countProdact, readCategorys };
