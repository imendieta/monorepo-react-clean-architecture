const createNotification = (storage) => async (notification) => {
    const listNotifications = await storage.get();
    const updateNotifications = [...listNotifications, notification];
    await storage.save(updateNotifications);
};
const deleteNotification = (storage) => async (notificationId) => {
    const listNotifications = await storage.get();
    const removeNotifications = listNotifications.filter((item) => item.id !== notificationId);
    await storage.save(removeNotifications);
};
const inMemoryNotification = ({ storage }) => ({
    createNotification: createNotification(storage),
    deleteNotification: deleteNotification(storage),
});
export { inMemoryNotification };
