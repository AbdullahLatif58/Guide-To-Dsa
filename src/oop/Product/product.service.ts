import { Product } from "./product.entity.js";
import  type { CreateProductDTO } from "./product.types.js";

export class ProductService {
 static create(body: any) {
    throw new Error("Method not implemented.");
 }
 static rename(arg0: number, name: any) {
    throw new Error("Method not implemented.");
 }

 async create(data: CreateProductDTO): Promise<Product> {
   const product = new Product(data);
   return product;
 }

 rename(id: number, name: string) {
   const product = new Product({
       id,

      name: "iPhone",

      description: "Apple Mobile",

      sku: "IP16",

      category: "Mobile",

      price: 1000,

      stock: 20,
   });
   
   product.rename(name);

   return product.toObject();
 }

}



export default ProductService;
