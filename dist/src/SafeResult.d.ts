export declare class SafeResult<T> {
    private _value;
    private _error;
    readonly value: T;
    readonly error: any;
    readonly isSuccessful: boolean;
    readonly isError: boolean;
    constructor();
    setSuccess(value: T): void;
    setError(error: any): void;
}
