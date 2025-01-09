import { NotificationRepository } from "../model/notificationRepository";

const DELETE_NOTIFICATION = "delete_notification";

interface DeleteNotificationHandlerFunctionArgs {
  readonly repository: NotificationRepository;
}

type DeleteNotificationHandlerFunctionResult = (notificationId: string) => Promise<void>;

interface DeleteNotificationHandlerFunction {
  (agrs: DeleteNotificationHandlerFunctionArgs): DeleteNotificationHandlerFunctionResult;
}

const deleteNotificationHandler: DeleteNotificationHandlerFunction =
  ({ repository }) =>
  async (notificationId) =>
    await repository.deleteNotification(notificationId);

export type { DeleteNotificationHandlerFunctionResult };
export { deleteNotificationHandler, DELETE_NOTIFICATION };
