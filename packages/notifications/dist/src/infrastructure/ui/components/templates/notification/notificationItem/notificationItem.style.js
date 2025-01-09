import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    toast: {
        width: 200,
        padding: 10,
        borderRadius: 8,
        zIndex: 999,
    },
    toastSuccess: {
        backgroundColor: "#b0cfae",
    },
    toastDanger: {
        backgroundColor: "#ff8680",
    },
    toastContent: {
        fontSize: 14,
    },
});
export { styles };
