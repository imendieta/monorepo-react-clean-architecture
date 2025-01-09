const NOTIFICATION_KEY = "notifications";
const createNotification = async (notification) => {
    const listNotifications = JSON.parse(localStorage.getItem(NOTIFICATION_KEY) || "[]");
    const updateNotifications = [...listNotifications, notification];
    localStorage.setItem(NOTIFICATION_KEY, JSON.stringify(updateNotifications));
};
const deleteNotification = async (notificationId) => {
    const listNotifications = JSON.parse(localStorage.getItem(NOTIFICATION_KEY) || "[]");
    const removeNotifications = listNotifications.filter((item) => item.id !== notificationId);
    localStorage.setItem(NOTIFICATION_KEY, JSON.stringify(removeNotifications));
};
const inMemoryNotification = {
    createNotification,
    deleteNotification,
};
export { inMemoryNotification };
