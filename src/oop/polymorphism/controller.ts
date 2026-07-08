
import { NotificationProvider } from "./entity.js";
import { EmailProvider, WhatsAppProvider } from "./entity.js";
import type { SendNotificationDTO } from "./type.js";
import { NotificationService } from "./services.js";
class NotificationController {

  private service = new NotificationService();

  public create(dto: SendNotificationDTO): void {

    let provider: NotificationProvider;

    if(dto.provider === "email"){

      provider = new EmailProvider("EMAIL_KEY");

    }else{

      provider = new WhatsAppProvider("WA_KEY");

    }

    this.service.send(
      provider,
      dto
    );

  }
}

