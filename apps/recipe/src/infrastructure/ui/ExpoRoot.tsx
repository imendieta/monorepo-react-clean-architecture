import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Notification } from "@monorepo-clean-architecture/notification";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { root } from "./view/Root";
import { fetchHttpGet } from "@monorepo-clean-architecture/http-config";
import { httpEnvironmentFetcher } from "../projection/environment/model/httpEnvironmentFetcher";
import { FC } from "react";

const queryClient = new QueryClient();

// TODO: Remove useEffect and set httpEnvironmentView
const ExpoRoot: FC = () => {
  const environment = httpEnvironmentFetcher({
    httpGet: fetchHttpGet({ apiUrl: () => "" }),
  });

  if (!environment) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const Root = root({ queryClient });
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Root />
        <Notification queryClient={queryClient} />
      </View>
    </QueryClientProvider>
  );
};

export { ExpoRoot };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
