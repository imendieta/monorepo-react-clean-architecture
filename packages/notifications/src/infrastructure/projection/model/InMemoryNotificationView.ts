import { NotificationProjection } from "../../../projection/model/notification";
import { NotificationView } from "../../../projection/model/notificationView";

interface ViewNotificationFunction {
  (): Promise<NotificationProjection[]>;
}

const viewNotifications: ViewNotificationFunction = async () => {
  const storageNotification = (await JSON.parse(
    localStorage.getItem("notifications") || "[]",
  )) as NotificationProjection[];

  return storageNotification;
};

const inMemoryNotificationView: NotificationView = {
  viewNotifications,
};

export { inMemoryNotificationView };
