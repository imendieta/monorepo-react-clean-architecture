const DELETE_NOTIFICATION = "delete_notification";
const deleteNotificationHandler = ({ repository }) => async (notificationId) => await repository.deleteNotification(notificationId);
export { deleteNotificationHandler, DELETE_NOTIFICATION };
