import { useMutation } from "@tanstack/react-query";
import { bootstrap } from "../../delivery/bootstrap";
import { useCallback } from "react";
import { v4 as uuid } from "uuid";
const { createNotification: { event, command }, viewNotification: { event: invalidationEvent }, } = bootstrap();
const useCreateNotification = ({ context }) => {
    const notificationId = uuid();
    const mutation = useMutation({
        mutationKey: [event],
        mutationFn: async (notification) => command(notification),
        onSuccess: () => {
            context.invalidateQueries({ queryKey: [invalidationEvent] });
        },
    });
    const create = useCallback(({ level, content }) => {
        mutation.mutate({ id: notificationId, level, content });
    }, [mutation]);
    return [create];
};
export { useCreateNotification };
