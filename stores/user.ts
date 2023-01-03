import { atom, useAtom } from "jotai";

export const user = atom<any>({});
export const cart = atom<any>([]);
export const shippingMethodsJotai = atom<any>({ id: 1 });
export const addressListJotai = atom<any>({});
