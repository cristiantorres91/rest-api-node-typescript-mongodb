import {Schema, model, Document} from 'mongoose';

export interface IProduct extends Document {
    name: string;
    category: string;
    price: Number;
};

const ProductSchema = new Schema(
    {
        name: {type: String, required: true},
        category: {type: String, required: true},
        price: {type: Number, required: true},
        createdAt: {type: Date, default: Date.now}

    }
);

export default model<IProduct>('Product', ProductSchema);