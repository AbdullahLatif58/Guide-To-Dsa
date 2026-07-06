// ===============================
// Base Class
// ===============================

class User {
  protected id: number;
  protected name: string;
  protected email: string;
  protected isLoggedIn: boolean;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isLoggedIn = false;
  }

  public login(): void {
    this.isLoggedIn = true;
    console.log(`${this.name} logged in.`);
  }

  public logout(): void {
    this.isLoggedIn = false;
    console.log(`${this.name} logged out.`);
  }

  public updateProfile(name: string, email: string): void {
    this.name = name;
    this.email = email;

    console.log("Profile updated.");
  }

  public getProfile() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      isLoggedIn: this.isLoggedIn,
    };
  }
}

// ===============================
// Customer
// ===============================

class Customer extends User {
  private cart: string[] = [];

  constructor(id: number, name: string, email: string) {
    super(id, name, email);
  }

  public addToCart(product: string): void {
    this.cart.push(product);

    console.log(`${product} added to cart.`);
  }

  public checkout(): void {
    console.log("Checkout completed.");
  }
}

// ===============================
// Seller
// ===============================

class Seller extends User {
  private products: string[] = [];

  constructor(id: number, name: string, email: string) {
    super(id, name, email);
  }

  public createProduct(product: string): void {
    this.products.push(product);

    console.log(`${product} created.`);
  }

  public deleteProduct(product: string): void {
    this.products = this.products.filter(p => p !== product);

    console.log(`${product} deleted.`);
  }
}

// ===============================
// Admin
// ===============================

class Admin extends User {
  constructor(id: number, name: string, email: string) {
    super(id, name, email);
  }

  public banUser(userId: number): void {
    console.log(`User ${userId} banned.`);
  }

  public deleteUser(userId: number): void {
    console.log(`User ${userId} deleted.`);
  }
}

// ===============================
// Usage
// ===============================

const customer = new Customer(
  1,
  "Abdullah",
  "customer@gmail.com"
);

customer.login();

customer.addToCart("MacBook Pro");

customer.checkout();

console.log(customer.getProfile());

console.log("--------------------------------");

const seller = new Seller(
  2,
  "Ali",
  "seller@gmail.com"
);

seller.login();

seller.createProduct("iPhone 17");

seller.deleteProduct("iPhone 17");

console.log(seller.getProfile());

console.log("--------------------------------");

const admin = new Admin(
  3,
  "Usman",
  "admin@gmail.com"
);

admin.login();

admin.banUser(1);

admin.deleteUser(2);

console.log(admin.getProfile());