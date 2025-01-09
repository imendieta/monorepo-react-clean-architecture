import React from "react";
import { useViewNotifications } from "../../projection/react/useViewNotifications";
import { Notification as NotificationTemplate } from "../components/templates/notification/Notification";
import { QueryClient } from "@tanstack/react-query";
import { useDeleteNotification } from "../../domain/react/useDeleteNotification";

interface NotificationProps {
  readonly queryClient: QueryClient;
}

const Notification: React.FC<NotificationProps> = ({queryClient}) => {
  const { data: notifications } = useViewNotifications();

  const [deleteNotification] = useDeleteNotification({context: queryClient})

  return notifications ? <NotificationTemplate notifications={notifications} deleteNotification={deleteNotification}/> : null;
};

export { Notification };
