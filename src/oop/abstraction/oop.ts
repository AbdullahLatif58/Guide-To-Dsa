
 // Abstraction is the process of defining what an object must do without defining how it must do it .


abstract class Payment {
   protected apiKey: string;
   protected isConnected: boolean;

   constructor(apiKey: string) {

    this.apiKey = apiKey;

    this.isConnected = false;

  }

  public connect(): void {
    this.isConnected = true;

  }
public disconnect(): void {

    this.isConnected = false;

    console.log("Disconnected Successfully.");

  }

  abstract pay(amount: number): void;

  abstract refund(paymentId: string): void;

}


  class StripeGateway extends Payment {
  public pay(amount: number): void {

    console.log(`Stripe charged $${amount}`);

  }

  public refund(paymentId: string): void {

    console.log(`Stripe refunded payment ${paymentId}`);

  }

}


   class Paypall extends Payment {
      public pay(amount: number): void {

      }

      public refund(paymentId: string): void {
         
      }
      
   }