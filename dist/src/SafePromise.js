"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SafeResult_1 = require("./SafeResult");
var SafePromise = (function () {
    function SafePromise() {
    }
    SafePromise.Run = function (promise) {
        return new Promise(function (response, reject) {
            var result = new SafeResult_1.SafeResult();
            promise()
                .then(function (value) {
                result.setSuccess(value || {});
                response(result);
            })
                .catch(function (error) {
                result.setError(error);
                response(result);
            });
        });
    };
    return SafePromise;
}());
exports.SafePromise = SafePromise;
//# sourceMappingURL=SafePromise.js.map