import type { CreateProductDTO } from "./product.types.js";

export  class Product {
  private readonly id?: number;

  private _name: string;
  private _price: number;
  private description: string;
  private sku: string;
  private category: string;


  private stock: number;

  private isActive: boolean;

  private createdAt: Date;
  private updatedAt: Date;

  constructor(data: CreateProductDTO) {
    this.validate(data);

    this.id = data.id;

    this._name = data.name;
    this.description = data.description;
    this.sku = data.sku;
    this.category = data.category;

    this._price = data.price;
    this.stock = data.stock;

    this.isActive = true;

    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  private validate(data: CreateProductDTO): void {
    if (!data.name.trim()) throw new Error("Product name is required.");

    if (!data.sku.trim()) throw new Error("SKU is required.");

    if (data.price <= 0)
      throw new Error("Price must be greater than zero.");

    if (data.stock < 0)
      throw new Error("Stock cannot be negative.");
  }

public get name(): string {

    return this._name;

  }
public get price(): number {

    return this._price;

}
  public set name(value: string) {

    if (!value.trim()) {

      throw new Error("Product name is required.");

    }

    this._name = value;

    this.updatedAt = new Date();

  }

  public rename(name: string): void {
    if (!name.trim()) throw new Error("Name is required.");

    this._name = name;
    this.updatedAt = new Date();
  }

  public increasePrice(price: number): void {
    if (price <= 0)
      throw new Error("Price increment must be greater than zero.");

    this._price += price;
    this.updatedAt = new Date();
  }

  public toObject() {
    return {
      id: this.id,
     
      description: this.description,
      sku: this.sku,
      category: this.category,
      
      stock: this.stock,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}