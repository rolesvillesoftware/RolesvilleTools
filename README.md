

# Rolesville Software LLC - Tool
NPM module containing routine and shared components for Angular and NodeJS programs and components writen by Roleville Software LLC.
## Installation

    npm install --save @rolesvillesoftware/tools
   
## **isNumeric**

Checks to verify if an object is numeric or not.

    import { isNumeric } from "@rolesvillesoftware/tools/dist";
    describe("Test isNumber", () => {
	    it("test", () => {
	        expect(isNumeric("32342")).toBeTruthy();
	        expect(isNumeric("234A23")).toBeFalsy();
	    });
    });

## SafePromise
SafePromise was designed to properly handle async and await in TypeScript and to reduce the warnings that are given when a promise is not properly caught. This was written by our team to have a common way to report successful and error promises. 

    import { SafePromise } from "@rolesvillesoftware/tools/dist";
    
    describe("Test SafePromise", () => {
      it("Test Successful", done => {
        SafePromise.run(() => Promise.resolve(true))
          .then(data => {
            expect(data.isError).toBeFalsy();
            expect(data.isSuccessful).toBeTruthy();
    
            const results = data.value;
            expect(data.value).toBeTruthy();
            done();
          })
          .catch(error => fail);
      });
    
      it("Test Failure", done => {
        SafePromise.run(() => Promise.reject("some error")).then(data => {
          expect(data.isError).toBeTruthy();
          expect(data.isSuccessful).toBeFalsy();
    
          const error = data.error;
          const results = data.value;
    
          expect(results).toBeNull();
          expect(error).toEqual("some error");
          done();
        });
      });
    });

Using within TypeScript:

    import { SafePromise } from "@rolesvillesoftware/tools/dist";
    
    export class SafePromiseExample {
    
        public async doSomething(promise: () => Promise<any>) {
            var results = await SafePromise.run(promise);
            if (results.isError) { throw new Error(results.error); }
            
            const result = results.value;
            /*** do other stuff now... */
        }
    }

 

> Written with [StackEdit](https://stackedit.io/).