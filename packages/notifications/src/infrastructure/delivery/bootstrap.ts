import {
  CREATE_NOTIFICATION,
  createNotificationHandler,
  CreateNotificationHandlerFunctionResult,
} from "../../domain/command/createNotification";
import {
  DELETE_NOTIFICATION,
  deleteNotificationHandler,
  DeleteNotificationHandlerFunctionResult,
} from "../../domain/command/deleteNotification";
import {
  VIEW_NOTIFICATION,
  viewNotificationHandler,
  ViewNotificationHandlerFunctionResult,
} from "../../projection/query/viewNotifications";
import { inMemoryNotification } from "../domain/model/inMemoryNotification";
import { inMemoryNotificationView } from "../projection/model/InMemoryNotificationView";
import { Query, Command } from "@monorepo-clean-architecture/typescript";

interface BootstrapFunctionResult {
  viewNotification: Query<ViewNotificationHandlerFunctionResult>;
  createNotification: Command<CreateNotificationHandlerFunctionResult>;
  deleteNotification: Command<DeleteNotificationHandlerFunctionResult>;
}

interface BootstrapFunction {
  (): BootstrapFunctionResult;
}

const bootstrap: BootstrapFunction = () => {
  const view = inMemoryNotificationView;
  const repository = inMemoryNotification;

  return {
    viewNotification: { event: VIEW_NOTIFICATION, query: viewNotificationHandler({ view }) },
    createNotification: { event: CREATE_NOTIFICATION, command: createNotificationHandler({ repository }) },
    deleteNotification: { event: DELETE_NOTIFICATION, command: deleteNotificationHandler({ repository }) },
  };
};

export { bootstrap };
