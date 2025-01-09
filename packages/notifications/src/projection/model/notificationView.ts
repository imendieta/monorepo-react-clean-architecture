import { NotificationProjection } from "./notification";

interface NotificationView {
  viewNotifications(): Promise<NotificationProjection[]>;
}

export type { NotificationView };
