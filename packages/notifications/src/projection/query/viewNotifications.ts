import { NotificationProjection } from "../model/notification";
import { NotificationView } from "../model/notificationView";

const VIEW_NOTIFICATION = "view_notification";

interface ViewNotificationHandlerFunctionArgs {
  readonly view: NotificationView;
}

type ViewNotificationHandlerFunctionResult = () => Promise<NotificationProjection[]>;

interface ViewNotificationHandlerFunction {
  (args: ViewNotificationHandlerFunctionArgs): ViewNotificationHandlerFunctionResult;
}

const viewNotificationHandler: ViewNotificationHandlerFunction =
  ({ view }) =>
  () =>
    view.viewNotifications();

export type { ViewNotificationHandlerFunctionResult };
export { viewNotificationHandler, VIEW_NOTIFICATION };
