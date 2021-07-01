import Product, { IProduct } from "../models/Products";
import { ObjectID } from "mongodb";

export async function getProductsServices() {
  try {
    return await Product.find();
  } catch (error) {
    // Log Errors
    throw Error(error);
  }
}

export async function getProductServices(id: ObjectID) {
  try {
    return await Product.findOne({ _id: id });
  } catch (error) {
    // Log Errors
    throw Error(error);
  }
}

export async function createProductServices(product: IProduct) {
  try {
    await product.save();
    return product;
  } catch (error) {
    // Log Errors
    throw Error(error);
  }
}

export async function updateProductServices(id: ObjectID, product: IProduct) {
    try {
      await Product.findOneAndUpdate({ _id: id}, product);
      return product;
    } catch (error) {
      // Log Errors
      throw Error(error);
    }
  }

  export async function deleteProductServices(id: ObjectID) {
    try {
      return await Product.findOneAndRemove({_id: id});
    } catch (error) {
      // Log Errors
      throw Error(error);
    }
  }
