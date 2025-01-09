const CREATE_NOTIFICATION = "create_notification";
const createNotificationHandler = ({ repository }) => async (notification) => await repository.createNotification(notification);
export { createNotificationHandler, CREATE_NOTIFICATION };
