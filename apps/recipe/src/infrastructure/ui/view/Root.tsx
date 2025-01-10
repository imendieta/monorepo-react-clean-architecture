import { useCreateNotification, NotificationLevel } from "@monorepo-clean-architecture/notification";
import { QueryClient } from "@tanstack/react-query";
import { ComponentType } from "react";
import { View, Button } from "react-native";
// import { EnvironmentProvider } from "../../projection/environment/react/Environment";
// import { EnvironmentProjection } from "../../../projection/environment/environment";

interface RootFunctionArgs {
  readonly queryClient: QueryClient;
}

interface RootFunction {
  (args: RootFunctionArgs): ComponentType;
}

const root: RootFunction = ({ queryClient }) => {
  const Root = () => {
    const [createNotification] = useCreateNotification({ context: queryClient });
    return (
      // <EnvironmentProvider environment={environment}>
      <View>
        <Button
          title="Create Notification"
          onPress={() =>
            createNotification({
              level: NotificationLevel.SUCCESS,
              content: "Hello, World!",
            })
          }
        />
      </View>
      // </EnvironmentProvider>
    );
  };

  return Root;
};

export { root };
