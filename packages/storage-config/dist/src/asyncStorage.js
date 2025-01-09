import AsyncStorage from "@react-native-async-storage/async-storage";
const asyncStorage = ({ storageKey }) => {
    const save = async (value) => {
        await AsyncStorage.setItem(storageKey, JSON.stringify(value));
    };
    const get = async () => {
        const value = await AsyncStorage.getItem(storageKey);
        return value ? JSON.parse(value) : null;
    };
    return { save, get };
};
export { asyncStorage };
