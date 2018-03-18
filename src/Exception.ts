export class Exception {
    private _message: string;
    private _stackTrace: string;
    private _innerException: Exception;

    get message(): string { return this._message; }
    get stackTrace(): string{ return this._stackTrace; }
    get innerException(): Exception { return this._innerException; }

    constructor(error: Error | Exception | string, innerException?: Error | string | Exception) {
        if (error instanceof Error) {
            this.buildError(error);
        } else if (error instanceof Exception) {
            this.buildException(error);
        } else {
            this.buildString(error);
        }
        if (innerException != null) {
            this._innerException = new Exception(innerException);
        }
    }

    buildError(error: Error) {
        this._message = error.message;
        this._stackTrace = error.stack;
        this._innerException = null;
    }
    buildException(exception: Exception) {
        this._message = exception.message;
        this._stackTrace = exception.stackTrace;
        this._innerException = exception;
    }
    buildString(error: string) {
        this._message = error;
        this._stackTrace = null;
        this._innerException = null;
    }
}
