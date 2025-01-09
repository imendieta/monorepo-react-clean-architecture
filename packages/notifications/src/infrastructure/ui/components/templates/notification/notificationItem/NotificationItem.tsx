import { useMemo } from "react";
import { Animated, Button, Text } from "react-native";
import { NotificationLevel } from "../../../../../../projection/model/notification";
import { useNotificationAnimation } from "../../../../hook/useNotificationAnimation";
import { styles } from "./notificationItem.style";

interface NotificationItemProps {
  readonly notificationId: string;
  readonly level: NotificationLevel;
  readonly content: string;
  readonly deleteNotification: (notificationId: string) => void;
}

const NotificationItem = ({ notificationId, level, content, deleteNotification }: NotificationItemProps) => {
  const [fadeAnimation] = useNotificationAnimation({ deleteNotification, notificationId });

  const backgroudStyle = useMemo(
    () => (level === NotificationLevel.SUCCESS ? styles.toastSuccess : styles.toastDanger),
    [level],
  );

  return (
    <Animated.View
      style={[
        styles.toast,
        backgroudStyle,
        {
          opacity: fadeAnimation,
          transform: [
            {
              translateY: fadeAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            },
          ],
        },
      ]}
    >
      <Button color="transparent" onPress={() => deleteNotification(notificationId)} title="X" />
      <Text>{content}</Text>
    </Animated.View>
  );
};

export { NotificationItem };
