import { Notification } from "../../../domain/model/notification";
import { NotificationRepository } from "../../../domain/model/notificationRepository";

const NOTIFICATION_KEY = "notifications";

const createNotification = async (notification: Notification) => {
  const listNotifications = JSON.parse(localStorage.getItem(NOTIFICATION_KEY) || "[]");
  const updateNotifications = [...listNotifications, notification];
  localStorage.setItem(NOTIFICATION_KEY, JSON.stringify(updateNotifications));
};

const deleteNotification = async (notificationId: string) => {
  const listNotifications = JSON.parse(localStorage.getItem(NOTIFICATION_KEY) || "[]") as Notification[];
  const removeNotifications = listNotifications.filter((item) => item.id !== notificationId);
  localStorage.setItem(NOTIFICATION_KEY, JSON.stringify(removeNotifications));
};

const inMemoryNotification: NotificationRepository = {
  createNotification,
  deleteNotification,
};

export { inMemoryNotification };
