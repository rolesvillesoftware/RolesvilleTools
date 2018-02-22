import { SafePromise } from "../src/SafePromise";

describe("SafePromise Tests",() => {

    it("Test success", (done) => {
        SafePromise.run<boolean>(() => Promise.resolve(true))
        .then(data => {
            expect(data).toBeDefined(); 
            expect(data.isError).toBeFalsy(); 
            expect(data.isSuccessful).toBeTruthy(); 

            done(); 
        })
        .catch(error => {
            fail(error); 
            done(); 
        });

    }, 15000);

    it("Test Failure", (done) => {
        SafePromise.run<boolean>(() => Promise.reject("Some Rejection Reason"))
            .then(data => {
                expect(data).toBeDefined(); 
                expect(data.isError).toBeTruthy(); 
                expect(data.isSuccessful).toBeFalsy(); 
                done(); 
            })
            .catch(error => {
                fail(error); 
                done(); 
            });
    }, 15000);
});