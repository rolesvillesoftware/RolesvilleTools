"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SafePromise_1 = require("../src/SafePromise");
describe("SafePromise Tests", function () {
    it("Test success", function (done) {
        SafePromise_1.SafePromise.Run(function () { return Promise.resolve(true); })
            .then(function (data) {
            expect(data).toBeDefined();
            expect(data.isError).toBeFalsy();
            expect(data.isSuccessful).toBeTruthy();
            done();
        })
            .catch(function (error) {
            fail(error);
            done();
        });
    }, 15000);
    it("Test Failure", function (done) {
        SafePromise_1.SafePromise.Run(function () { return Promise.reject("Some Rejection Reason"); })
            .then(function (data) {
            expect(data).toBeDefined();
            expect(data.isError).toBeTruthy();
            expect(data.isSuccessful).toBeFalsy();
            done();
        })
            .catch(function (error) {
            fail(error);
            done();
        });
    }, 15000);
});
//# sourceMappingURL=safePromise.spec.js.map