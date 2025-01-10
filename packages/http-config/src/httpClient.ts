type ErrorFunction<Result> = (errorResponse: Response) => Result;

const isErrorFunction = <Result>(error: ErrorFunction<Result> | Result): error is ErrorFunction<Result> =>
  typeof error === "function";

interface HttpFunctionResult<Response, Result> {
  readonly error: ErrorFunction<Result> | Result;
  readonly success: (response: Response) => Result;
}

interface HttpGetFunctionArgs<Response, Result> {
  readonly endpoint: string;
  readonly signal?: AbortSignal;
  readonly result?: HttpFunctionResult<Response, Result>;
}

interface HttpGetFunction {
  <Response, Result = Response>(args: HttpGetFunctionArgs<Response, Result>): Promise<Result>;
}

interface HttpPostFunctionArgs<Response, Result> {
  readonly endpoint: string;
  readonly body: Record<string, unknown>;
  readonly signal?: AbortSignal;
  readonly result?: HttpFunctionResult<Response, Result>;
}

interface HttpPostFunction {
  <Response = void, Result = Response>(args: HttpPostFunctionArgs<Response, Result>): Promise<Result>;
}

export type { HttpGetFunction, HttpPostFunction, HttpFunctionResult };
export { isErrorFunction };
