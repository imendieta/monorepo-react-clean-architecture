import { jsx as _jsx } from "react/jsx-runtime";
import { useViewNotifications } from "../../projection/react/useViewNotifications";
import { Notification as NotificationTemplate } from "../components/templates/notification/Notification";
import { useDeleteNotification } from "../../domain/react/useDeleteNotification";
const Notification = ({ queryClient }) => {
    const { data: notifications } = useViewNotifications();
    const [deleteNotification] = useDeleteNotification({ context: queryClient });
    return notifications ? _jsx(NotificationTemplate, { notifications: notifications, deleteNotification: deleteNotification }) : null;
};
export { Notification };
