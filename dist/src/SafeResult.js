"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SafeResult = (function () {
    function SafeResult() {
        this[0] = null;
        this[1] = null;
    }
    Object.defineProperty(SafeResult.prototype, "value", {
        get: function () {
            return this[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SafeResult.prototype, "error", {
        get: function () {
            return this[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SafeResult.prototype, "isSuccessful", {
        get: function () {
            return this[0] != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SafeResult.prototype, "isError", {
        get: function () {
            return this[1] != null;
        },
        enumerable: true,
        configurable: true
    });
    SafeResult.prototype.setSuccess = function (value) {
        this[0] = value;
        this[1] = null;
    };
    SafeResult.prototype.setError = function (error) {
        this[1] = error;
        this[0] = null;
    };
    return SafeResult;
}());
exports.SafeResult = SafeResult;
//# sourceMappingURL=SafeResult.js.map