import { createContext, ReactNode, FC, useContext } from "react";
import { EnvironmentProjection } from "../../../../projection/environment/environment";
import invariant from "tiny-invariant";

interface EnviromentContext {
  readonly environment: EnvironmentProjection;
}

const EnvironmentContext = createContext<EnviromentContext | null>(null);

interface EnvironmentProps {
  readonly environment: EnvironmentProjection;
  readonly children: ReactNode;
}

const EnvironmentProvider: FC<EnvironmentProps> = ({ environment, children }) => {
  return <EnvironmentContext.Provider value={{ environment }}>{children}</EnvironmentContext.Provider>;
};

const useEnvironment = (): EnviromentContext => {
  const enviroment = useContext(EnvironmentContext);

  invariant(enviroment, "Environment not found");

  return enviroment;
};

export { EnvironmentProvider, useEnvironment };
