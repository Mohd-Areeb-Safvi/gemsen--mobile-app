import { atom, useAtom } from "jotai";

export const user = atom<any>({});
export const cart = atom<any>([]);
export const shippingMethodsJotai = atom<any>({
  id: 1,
  price: 0,
  text1: "Free",
  text2: "Pickup at GEMSEN",
});
export const addressListJotai = atom<any>({});
export const purchaseOrderNumberJotai = atom<any>("");
export const counterValueJotai = atom<any>([]);
