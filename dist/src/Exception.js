"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exception = (function () {
    function Exception(error, innerException) {
        if (error instanceof Error) {
            this.buildError(error);
        }
        else if (error instanceof Exception) {
            this.buildException(error);
        }
        else {
            this.buildString(error);
        }
        if (innerException != null) {
            this._innerException = new Exception(innerException);
        }
    }
    Object.defineProperty(Exception.prototype, "message", {
        get: function () { return this._message; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exception.prototype, "stackTrace", {
        get: function () { return this._stackTrace; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exception.prototype, "innerException", {
        get: function () { return this._innerException; },
        enumerable: true,
        configurable: true
    });
    Exception.prototype.buildError = function (error) {
        this._message = error.message;
        this._stackTrace = error.stack;
        this._innerException = null;
    };
    Exception.prototype.buildException = function (exception) {
        this._message = exception.message;
        this._stackTrace = exception.stackTrace;
        this._innerException = exception;
    };
    Exception.prototype.buildString = function (error) {
        this.buildError(new Error(error));
    };
    return Exception;
}());
exports.Exception = Exception;
//# sourceMappingURL=Exception.js.map