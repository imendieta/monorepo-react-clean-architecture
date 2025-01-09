import { useQuery } from "@tanstack/react-query";
import { bootstrap } from "../../delivery/bootstrap";

const {
  viewNotification: { event, query },
} = bootstrap();

const useViewNotifications = () =>
  useQuery({
    queryKey: event,
    queryFn: async () => await query(),
    refetchOnWindowFocus: false,
    retry: false,
  });

export { useViewNotifications };
