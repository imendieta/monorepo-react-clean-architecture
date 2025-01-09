import { useEffect, useRef } from "react";
import { Animated } from "react-native";

interface UseNotificationAnimationFunctionArgs {
  readonly notificationId: string;
  readonly deleteNotification: (notificationId: string) => void;
}

type UseNotificationAnimationFunctionResult = [animation: Animated.Value];

interface UseNotificationAnimationFunction {
  (args: UseNotificationAnimationFunctionArgs): UseNotificationAnimationFunctionResult;
}

const useNotificationAnimation: UseNotificationAnimationFunction = ({ deleteNotification, notificationId }) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    const fadeout = setTimeout(() => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => deleteNotification(notificationId));
    }, 8000);

    return () => clearTimeout(fadeout);
  }, [fadeAnimation, notificationId, deleteNotification]);

  return [fadeAnimation];
};

export { useNotificationAnimation };
