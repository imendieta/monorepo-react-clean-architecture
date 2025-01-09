import { jsx as _jsx } from "react/jsx-runtime";
import { Children } from "react";
import { View } from "react-native";
const Stack = ({ children, style }) => (_jsx(View, { style: [
        {
            position: "absolute",
            top: 20,
            flexDirection: "column",
            zIndex: 999,
        },
        style,
    ], children: Children.map(children, (child, index) => (_jsx(View, { style: { marginBottom: index < Children.count(children) - 1 ? 10 : 0 }, children: child }, index))) }));
export { Stack };
