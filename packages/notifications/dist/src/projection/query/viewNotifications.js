const VIEW_NOTIFICATION = "view_notification";
const viewNotificationHandler = ({ view }) => () => view.viewNotifications();
export { viewNotificationHandler, VIEW_NOTIFICATION };
