import { HttpFunctionResult, HttpGetFunction, HttpPostFunction, isErrorFunction } from "./httpClient";

interface FetchHttpFunctionArgs {
  readonly apiUrl: () => string;
  readonly getAuthToken?: () => Promise<string>;
}

interface FetchHttpPostFunction {
  (args: FetchHttpFunctionArgs): HttpPostFunction;
}

const fetchHttpPost: FetchHttpPostFunction =
  ({ apiUrl, getAuthToken }) =>
  async ({ endpoint, body, signal, result }) => {
    const response = await fetch(`${apiUrl()}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthToken ? `Bearer ${await getAuthToken()}` : "",
      },
      body: JSON.stringify(body),
      signal,
    });

    return await processResponse({ response, result });
  };

interface FetchHttpGetFunction {
  (args: FetchHttpFunctionArgs): HttpGetFunction;
}

const fetchHttpGet: FetchHttpGetFunction =
  ({ apiUrl, getAuthToken }) =>
  async ({ endpoint, signal, result }) => {
    const response = await fetch(`${apiUrl()}${endpoint}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthToken ? `Bearer ${await getAuthToken()}` : "",
      },
      referrer: "",
      signal,
    });

    return await processResponse({ response, result });
  };

interface ProcessResponseFunctionArgs<R, Result> {
  readonly result: HttpFunctionResult<R, Result> | undefined;
  readonly response: Response;
}

interface ProcessResponseFunction {
  <R, Result = R>(args: ProcessResponseFunctionArgs<R, Result>): Promise<Result> | never;
}

const processResponse: ProcessResponseFunction = async ({ response, result }) => {
  if (response.ok) {
    const responseText = await response.text();
    let responseResult;

    try {
      responseResult = JSON.parse(responseText);
    } catch (error) {
      responseResult = responseText;
    }

    return result?.success ? result?.success(responseResult) : responseResult;
  }

  if (result?.error !== undefined) {
    return isErrorFunction(result.error) ? result.error(response) : result.error;
  }

  throw new Error(response.statusText);
};

export { fetchHttpGet, fetchHttpPost };
