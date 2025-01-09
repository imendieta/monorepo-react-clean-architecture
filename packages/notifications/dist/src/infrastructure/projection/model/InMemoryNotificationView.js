const viewNotifications = ({ storage }) => async () => await storage.get();
const inMemoryNotificationView = ({ storage }) => ({
    viewNotifications: viewNotifications({ storage }),
});
export { inMemoryNotificationView };
