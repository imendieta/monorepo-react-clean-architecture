import { jsx as _jsx } from "react/jsx-runtime";
import { NotificationItem } from "./notificationItem/NotificationItem";
import { Stack } from "./stack/Stack";
const Notification = ({ notifications, deleteNotification }) => {
    return (_jsx(Stack, { children: notifications.map((notification) => (_jsx(NotificationItem, { notificationId: notification.id, level: notification.level, content: notification.content, deleteNotification: deleteNotification }, notification.id))) }));
};
export { Notification };
