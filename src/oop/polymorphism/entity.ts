// 


 export abstract class NotificationProvider {


    constructor(protected apiKey: string) {}

    public connect(): void {

    console.log("Provider Connected");

  }

  public disconnect(): void {

    console.log("Provider Disconnected");

  }

  abstract send(message: string, recipient: string): void 

 }


 class EmailProvider extends NotificationProvider {
  public send(
    recipient: string,
    message: string
  ): void {

    console.log("========== EMAIL ==========");

    console.log(`Recipient : ${recipient}`);

    console.log(`Message   : ${message}`);

    console.log("Email Sent Successfully");

  }
}


class WhatsAppProvider extends NotificationProvider {
  public send(
    recipient: string,
    message: string
  ): void {

    console.log("======= WHATSAPP =======");

    console.log(`Phone : ${recipient}`);

    console.log(`Message : ${message}`);

    console.log("WhatsApp Message Sent");

  }
}


class SMSProvider extends NotificationProvider {
  public send(
    recipient: string,
    message: string
  ): void {

    console.log("========== SMS ==========");

    console.log(`Phone : ${recipient}`);

    console.log(`Message : ${message}`);

    console.log("SMS Sent");

  }

}



function notify(
  provider: NotificationProvider,
  recipient: string,
  message: string
): void {

  provider.connect();

  provider.send(recipient, message);

  provider.disconnect();

}

