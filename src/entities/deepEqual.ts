import { IUserData } from "~/src/entities/eventTypes";

export function deepEqual(object1: IUserData, object2: IUserData) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    // @ts-ignore
    const val1 = object1[key];
    // @ts-ignore
    const val2 = object2[key];
    if (val1 !== val2) {
      return false;
    }
  }
  return true;
}
