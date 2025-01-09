import { CREATE_NOTIFICATION, createNotificationHandler, } from "../../domain/command/createNotification";
import { DELETE_NOTIFICATION, deleteNotificationHandler, } from "../../domain/command/deleteNotification";
import { VIEW_NOTIFICATION, viewNotificationHandler, } from "../../projection/query/viewNotifications";
import { inMemoryNotification } from "../domain/model/inMemoryNotification";
import { inMemoryNotificationView } from "../projection/model/InMemoryNotificationView";
const bootstrap = () => {
    const view = inMemoryNotificationView;
    const repository = inMemoryNotification;
    return {
        viewNotification: { event: VIEW_NOTIFICATION, query: viewNotificationHandler({ view }) },
        createNotification: { event: CREATE_NOTIFICATION, command: createNotificationHandler({ repository }) },
        deleteNotification: { event: DELETE_NOTIFICATION, command: deleteNotificationHandler({ repository }) },
    };
};
export { bootstrap };
