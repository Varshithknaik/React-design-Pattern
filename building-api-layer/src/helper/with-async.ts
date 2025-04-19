/* eslint-disable @typescript-eslint/no-explicit-any */
export async function withAsync(fn: () => Promise<any>) {
  try {
    if (typeof fn !== "function") {
      throw new Error("The arg. must be a function.");
    }

    const { data } = await fn();

    return {
      response: data,
      error: null,
    };
  } catch (error) {
    return {
      response: null,
      error,
    };
  }
}
