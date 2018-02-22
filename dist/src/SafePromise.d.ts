import { SafeResult } from "./SafeResult";
export declare class SafePromise {
    static run<T>(promise: () => Promise<T>): Promise<SafeResult<T>>;
    private static handlePromise<T>(promise);
}
