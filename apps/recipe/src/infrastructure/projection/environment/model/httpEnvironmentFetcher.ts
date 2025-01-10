import { EnvironmentProjection } from "../../../../projection/environment/environment";
import { HttpGetFunction } from "@monorepo-clean-architecture/http-config";

type EnvironmentFetcherResult = EnvironmentProjection | null;

interface HttpEnvironmentFetcherFunctionArgs {
  readonly httpGet: HttpGetFunction;
}

interface HttpEnvironmentFetcherFunction {
  (args: HttpEnvironmentFetcherFunctionArgs): Promise<EnvironmentFetcherResult>;
}

const httpEnvironmentFetcher: HttpEnvironmentFetcherFunction = async ({ httpGet }) =>
  await httpGet<EnvironmentProjection, EnvironmentFetcherResult>({
    endpoint: `/config.json?${Date.now()}`,
    result: {
      error: null,
      success: (environment: EnvironmentProjection) => environment,
    },
  });

export { httpEnvironmentFetcher };
