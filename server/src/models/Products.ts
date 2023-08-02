import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct {
    title: string;
    price: number;
    description: string;
    image: string;
    percent: number;
    category: string;
    subcategory: string;
    volume: number;
}

export interface IIProductModel extends IProduct, Document {}

const ProductSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        percent: { type: Number, required: true },
        category: { type: String, required: true },
        subcategory: { type: String, required: true },
        volume: { type: Number, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IIProductModel>('products', ProductSchema);
