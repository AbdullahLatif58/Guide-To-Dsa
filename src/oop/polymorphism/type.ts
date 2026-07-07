export type SendNotificationDTO = {
  provider: "email" | "whatsapp";
  recipient: string;
  message: string;
};