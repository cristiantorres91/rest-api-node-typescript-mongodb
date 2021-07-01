import { Request, Response } from "express";
import Product, { IProduct } from "../models/Products";
import { ObjectID } from "mongodb";

import {
  getProductServices,
  getProductsServices,
  createProductServices,
  updateProductServices,
  deleteProductServices
} from "../services/productServices";

export async function getProductsController(req: Request, res: Response) {
  try {
    const products = await getProductsServices();
    console.log(products);
    res.json(products);
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
}

export async function getProductController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const product = await getProductServices(new ObjectID(id));
    console.log(product);
    res.json(product);
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
}

export async function createProductController(req: Request, res: Response) {
  try {
    const { name, category, price } = req.body;
    const newproduct: IProduct = new Product({ name, category, price });
    await createProductServices(newproduct);
    res.json(newproduct);
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
}

export async function updateProductController(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await updateProductServices(new ObjectID(id), req.body);
      console.log(product);
      res.json(product);
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  }

  export async function deleteProductController(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await deleteProductServices(new ObjectID(id));
      console.log(product);
      res.json(product);
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  }