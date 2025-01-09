import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { bootstrap } from "../../delivery/bootstrap";
const { deleteNotification: { event, command }, viewNotification: { event: invalidationEvent }, } = bootstrap();
const useDeleteNotification = ({ context }) => {
    const mutation = useMutation({
        mutationKey: [event],
        mutationFn: async (notificationId) => command(notificationId),
        onSuccess: () => {
            context.invalidateQueries({ queryKey: [invalidationEvent] });
        },
    });
    const deleteNotificationById = useCallback((notificationId) => {
        mutation.mutate(notificationId);
    }, [mutation]);
    return [deleteNotificationById];
};
export { useDeleteNotification };
