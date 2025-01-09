enum NotificationLevel {
  DANGER = "DANGER",
  SUCCESS = "SUCCESS",
}

interface NotificationProjection {
  readonly id: string;
  readonly level: NotificationLevel;
  readonly content: string;
}

export type { NotificationProjection };
export { NotificationLevel };
