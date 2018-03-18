import { SafeResult } from "./SafeResult";

/**
 * Class to properly handle promises for async operations
 *
 * @export
 * @class SafePromise
 * @template T
 */
export class SafePromise {
  /**
   * Run promise under a safe method to capture errors and return a proper promise back
   *
   * @static
   * @template T
   * @param {(() => Promise<T> | Promise<T>)} promise  Promise to execute in "Safe" manner
   * @returns {SafeResult<T>} A promise of the original promise returning the SafeResult type.
   * @memberof SafePromise
   */
  public static run<T>(promise: () => Promise<T>): Promise<SafeResult<T>> {
    const result = new SafeResult<T>();
    if (typeof promise === "function") {
      return SafePromise.handlePromise(promise);
    } else {
      return Promise.reject("Promise must be in the form of a function for now.")
    }
  }
  /**
   * Handles the promise and the results
   *
   * @private
   * @static
   * @template T
   * @param {Promise<T>} promise
   * @returns {Promise<SafeResult<T>>}
   * @memberof SafePromise
   */
  private static handlePromise<T>(promise: () => Promise<T>): Promise<SafeResult<T>> {
    return new Promise<SafeResult<T>>((response, reject) => {
      const result = new SafeResult<T>();

      promise()
        .then(value => {
          result.setSuccess(value || ({} as T));
          response(result);
        })
        .catch(error => {
          result.setError(error);
          response(result);
        });
    });
  }
}
