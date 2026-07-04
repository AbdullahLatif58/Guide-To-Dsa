import type { Request, Response } from "express";
import productService from "./product.service.js";

class ProductController {
  create(req: Request, res: Response) {
    const product = productService.create(req.body);

    res.status(201).json(product);
  }

  rename(req: Request, res: Response) {
    const product = productService.rename(
      Number(req.params.id),
      req.body.name
    );

    res.json(product);
  }

}

export default new ProductController();


