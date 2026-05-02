import { AsyncLocalStorage } from "node:async_hooks";
import { AsyncLocalStorageType } from "../dto/request.dto";
export const asyncLocalStorage=new AsyncLocalStorage<AsyncLocalStorageType>();

export const getAsyncLocalStorage=()=>{
  const asyncStore=asyncLocalStorage.getStore();
  return asyncStore?.requestId;
}