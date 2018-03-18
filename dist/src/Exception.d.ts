export declare class Exception {
    private _message;
    private _stackTrace;
    private _innerException;
    readonly message: string;
    readonly stackTrace: string;
    readonly innerException: Exception;
    constructor(error: Error | Exception | string, innerException?: Error | string | Exception);
    buildError(error: Error): void;
    buildException(exception: Exception): void;
    buildString(error: string): void;
}
