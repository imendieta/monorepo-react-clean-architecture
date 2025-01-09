import { Children, FC, ReactNode } from "react";
import { View, ViewStyle } from "react-native";

interface StackProps {
  readonly children: ReactNode;
  readonly style?: ViewStyle;
}

const Stack: FC<StackProps> = ({ children, style }) => (
  <View
    style={[
      {
        position: "absolute",
        top: 20,
        flexDirection: "column",
        zIndex: 999,
      },
      style,
    ]}
  >
    {Children.map(children, (child, index) => (
      <View key={index} style={{ marginBottom: index < Children.count(children) - 1 ? 10 : 0 }}>
        {child}
      </View>
    ))}
  </View>
);

export { Stack };
