import { Router } from "express";
import {
  getProductController,
  getProductsController,
  createProductController,
  updateProductController,
  deleteProductController
} from "../controller/productController";

class Product {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get("/", getProductsController);
    this.router.get("/:id", getProductController);
    this.router.post("/", createProductController);
    this.router.put('/:id', updateProductController);
    this.router.delete('/:id', deleteProductController);
  }
}

const product = new Product();
export default product.router;
