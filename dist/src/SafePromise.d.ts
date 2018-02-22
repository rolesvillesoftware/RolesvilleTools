import { SafeResult } from "./SafeResult";
export declare class SafePromise<T> {
    static Run<T>(promise: () => Promise<T>): Promise<SafeResult<T>>;
}
