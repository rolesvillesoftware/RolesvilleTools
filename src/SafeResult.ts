/**
 * Class to handle the result of a SafePromise
 *
 * @export
 * @class SafeResult
 * @extends {Array}
 * @template T
 */
export class SafeResult<T> {
  private _value: T;
  private _error: any; 

  /**
   * The value of the promise result is successful
   *
   * @readonly
   * @type {T}
   * @memberof SafeResult
   */
  get value(): T {
    return this[0]
  }

  /**
   * If the promise is unsuccessful, the error message
   *
   * @readonly
   * @type {*}
   * @memberof SafeResult
   */
  get error(): any {
    return this[1]; 
  }

  /**
   * Flag to indicate if the promise was successful
   *
   * @readonly
   * @type {boolean}
   * @memberof SafeResult
   */
  get isSuccessful(): boolean {
    return this[0] != null;
  }
  /**
   * Flag to indiciate if the promise run end in error (catch)
   *
   * @readonly
   * @type {boolean}
   * @memberof SafeResult
   */
  get isError(): boolean {
    return this[1] != null;
  }

  constructor() {
    this[0] = null;
    this[1] = null;
  }

  /**
   * Method used to set the result as successful and to store the value of the promise
   *
   * @param {T} value
   * @memberof SafeResult
   */
  public setSuccess(value: T) {
    this[0] = value;
    this[1] = null;
  }

  /**
   * Method used to set the result as unsuccessful (error) and to store the value of the error message
   * Also removes the value if any is stored in the object.
   *
   * @param {*} error
   * @memberof SafeResult
   */
  public setError(error: any) {
    this[1] = error;
    this[0] = null;
  }
}
