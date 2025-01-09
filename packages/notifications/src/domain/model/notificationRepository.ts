import { Notification } from "./notification";

interface NotificationRepository {
  createNotification(notification: Notification): Promise<void>;
  deleteNotification(notificationId: string): Promise<void>;
}

export type { NotificationRepository };
