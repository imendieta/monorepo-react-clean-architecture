import { NotificationLevel } from "../../projection/model/notification";

interface Notification {
  readonly id: string;
  readonly level: NotificationLevel;
  readonly content: string;
}

export type { Notification };
