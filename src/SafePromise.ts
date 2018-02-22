import { SafeResult } from "./SafeResult";

/**
 * Class to properly handle promises for async operations
 *
 * @export
 * @class SafePromise
 * @template T
 */
export class SafePromise<T> {
  /**
   * Run promise under a safe method to capture errors and return a proper promise back
   *
   * @static
   * @template T
   * @param {() => Promise<T>} Promise to execute in "Safe" manner
   * @returns {SafeResult<T>} A promise of the original promise returning the SafeResult type. 
   * @memberof SafePromise
   */
  public static Run<T>(promise: () => Promise<T>): Promise<SafeResult<T>> {
    return new Promise<SafeResult<T>>((response, reject) => {
      const result = new SafeResult<T>();

      promise()
        .then(value => {
          result.setSuccess(value || {} as T);
          response(result);
        })
        .catch(error => {
          result.setError(error);
          response(result);
        });
    });
  }
}
