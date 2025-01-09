import { QueryClient, useMutation } from "@tanstack/react-query";
import { Notification } from "../../../domain/model/notification";
import { bootstrap } from "../../delivery/bootstrap";
import { useCallback } from "react";
import { v4 as uuid } from "uuid";
import { NotificationLevel } from "../../../projection/model/notification";

const {
  createNotification: { event, command },
  viewNotification: { event: invalidationEvent },
} = bootstrap();

interface CreateNotificationFunctionArgs {
  readonly level: NotificationLevel;
  readonly content: string;
}

interface CreateNotificationFunction {
  (args: CreateNotificationFunctionArgs): void;
}

interface UseCreateNotificationFunctionArgs {
  readonly context: QueryClient;
}

type UseCreateNotificationFunctionResult = [create: CreateNotificationFunction];

interface UseCreateNotificationFunction {
  (args: UseCreateNotificationFunctionArgs): UseCreateNotificationFunctionResult;
}

const useCreateNotification: UseCreateNotificationFunction = ({ context }) => {
  const notificationId = uuid();
  const mutation = useMutation({
    mutationKey: [event],
    mutationFn: async (notification: Notification) => command(notification),
    onSuccess: () => {
      context.invalidateQueries({ queryKey: [invalidationEvent] });
    },
  });

  const create: CreateNotificationFunction = useCallback(
    ({ level, content }) => {
      mutation.mutate({ id: notificationId, level, content });
    },
    [mutation],
  );

  return [create];
};

export { useCreateNotification };
