import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { Animated, Button, Text } from "react-native";
import { NotificationLevel } from "../../../../../../projection/model/notification";
import { useNotificationAnimation } from "../../../../hook/useNotificationAnimation";
import { styles } from "./notificationItem.style";
const NotificationItem = ({ notificationId, level, content, deleteNotification }) => {
    const [fadeAnimation] = useNotificationAnimation({ deleteNotification, notificationId });
    const backgroudStyle = useMemo(() => (level === NotificationLevel.SUCCESS ? styles.toastSuccess : styles.toastDanger), [level]);
    return (_jsxs(Animated.View, { style: [
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
        ], children: [_jsx(Button, { color: "transparent", onPress: () => deleteNotification(notificationId), title: "X" }), _jsx(Text, { children: content })] }));
};
export { NotificationItem };
