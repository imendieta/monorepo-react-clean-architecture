import { AsyncStorageFunctionResult } from "@monorepo-clean-architecture/storage-config";
import { NotificationProjection } from "../../../projection/model/notification";
import { NotificationView } from "../../../projection/model/notificationView";

interface ViewNotificationFunctionArgs {
  readonly storage: AsyncStorageFunctionResult<NotificationProjection[]>;
}

interface ViewNotificationFunction {
  (args: ViewNotificationFunctionArgs): () => Promise<NotificationProjection[]>;
}

const viewNotifications: ViewNotificationFunction =
  ({ storage }) =>
  async () =>
    await storage.get();

interface InMemoryNotificationViewFunctionArgs {
  readonly storage: AsyncStorageFunctionResult<NotificationProjection[]>;
}

interface InMemoryNotificationViewFunction {
  (args: InMemoryNotificationViewFunctionArgs): NotificationView;
}

const inMemoryNotificationView: InMemoryNotificationViewFunction = ({ storage }) => ({
  viewNotifications: viewNotifications({ storage }),
});

export { inMemoryNotificationView };
