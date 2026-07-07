
import { NotificationProvider} from "./entity.js";

import type { SendNotificationDTO } from "./type.js";
 class NotificationService {

  public send(
    provider: NotificationProvider,
    dto: SendNotificationDTO
  ): void {

    provider.connect();

    provider.send(
      dto.recipient,
      dto.message
    );

    provider.disconnect();

  }

}

