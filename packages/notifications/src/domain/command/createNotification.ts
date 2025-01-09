import { NotificationRepository } from "../model/notificationRepository";
import { Notification } from "../model/notification";

const CREATE_NOTIFICATION = "create_notification";

interface CreateNotificationHandlerFunctionArgs {
  readonly repository: NotificationRepository;
}

type CreateNotificationHandlerFunctionResult = (notification: Notification) => Promise<void>;

interface CreateNotificationHandlerFunction {
  (args: CreateNotificationHandlerFunctionArgs): CreateNotificationHandlerFunctionResult;
}

const createNotificationHandler: CreateNotificationHandlerFunction =
  ({ repository }) =>
  async (notification) =>
    await repository.createNotification(notification);

export type { CreateNotificationHandlerFunctionResult };
export { createNotificationHandler, CREATE_NOTIFICATION };
