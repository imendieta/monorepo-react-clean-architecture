import { NotificationProjection } from "../../../../../projection/model/notification";
import { NotificationItem } from "./notificationItem/NotificationItem";
import { Stack } from "./stack/Stack";

interface NotificationProps {
  readonly notifications: NotificationProjection[];
  readonly deleteNotification: (notificationId: string) => void;
}

const Notification: React.FC<NotificationProps> = ({ notifications, deleteNotification }) => {
  return (
    <Stack>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notificationId={notification.id}
          level={notification.level}
          content={notification.content}
          deleteNotification={deleteNotification}
        />
      ))}
    </Stack>
  );
};

export { Notification };
