import { QueryClient, useMutation } from "@tanstack/react-query";

import { useCallback } from "react";
import { bootstrap } from "../../delivery/bootstrap";

const {
  deleteNotification: { event, command },
  viewNotification: { event: invalidationEvent },
} = bootstrap();

interface DeleteNotificationFunction {
  (notificationId: string): void;
}

interface UseDeleteNotificationFunctionArgs {
  readonly context: QueryClient;
}

type UseDeleteNotificationFunctionResult = [deleteNotificationById: DeleteNotificationFunction];

interface UseDeleteNotificationFunction {
  (args: UseDeleteNotificationFunctionArgs): UseDeleteNotificationFunctionResult;
}

const useDeleteNotification: UseDeleteNotificationFunction = ({ context }) => {
  const mutation = useMutation({
    mutationKey: [event],
    mutationFn: async (notificationId: string) => command(notificationId),
    onSuccess: () => {
      context.invalidateQueries({ queryKey: [invalidationEvent] });
    },
  });

  const deleteNotificationById: DeleteNotificationFunction = useCallback(
    (notificationId) => {
      mutation.mutate(notificationId);
    },
    [mutation],
  );

  return [deleteNotificationById];
};

export { useDeleteNotification };
