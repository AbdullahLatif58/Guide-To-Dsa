//Encapsulation is about protecting an object’s data and making the object responsible for controlling and validating its own state.


class Product {
  private price:  number = 10;
  public updateProce(newPrice: number): void {
    this.price = newPrice; 
  }
  public getPrice(): number {
    return this.price;
  }
}


const product = new Product();

product.updateProce(30);
