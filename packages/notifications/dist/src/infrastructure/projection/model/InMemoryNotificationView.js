const viewNotifications = async () => {
    const storageNotification = (await JSON.parse(localStorage.getItem("notifications") || "[]"));
    return storageNotification;
};
const inMemoryNotificationView = {
    viewNotifications,
};
export { inMemoryNotificationView };
