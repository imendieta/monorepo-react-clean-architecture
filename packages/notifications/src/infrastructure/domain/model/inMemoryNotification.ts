import { AsyncStorageFunctionResult } from "@monorepo-clean-architecture/storage-config";
import { Notification } from "../../../domain/model/notification";
import { NotificationRepository } from "../../../domain/model/notificationRepository";

const createNotification =
  (storage: AsyncStorageFunctionResult<Notification[]>) => async (notification: Notification) => {
    const listNotifications = (await storage.get()) || [];
    const updateNotifications = [...listNotifications, notification];
    await storage.save(updateNotifications);
  };

const deleteNotification = (storage: AsyncStorageFunctionResult<Notification[]>) => async (notificationId: string) => {
  const listNotifications = await storage.get();
  const removeNotifications = listNotifications.filter((item) => item.id !== notificationId);
  await storage.save(removeNotifications);
};

interface InMemoryNotificationFunctionArgs {
  readonly storage: AsyncStorageFunctionResult<Notification[]>;
}

interface InMemoryNotificationFunction {
  (args: InMemoryNotificationFunctionArgs): NotificationRepository;
}

const inMemoryNotification: InMemoryNotificationFunction = ({ storage }) => ({
  createNotification: createNotification(storage),
  deleteNotification: deleteNotification(storage),
});

export { inMemoryNotification };
