import { create } from "zustand";

interface User {
  username: string;
  email: string;
  phone: number;
  addOns: {
    id: number;
    price: number;
    useId?: number;
    isChecked: boolean;
  }[];
  plan: {
    id: number;
    useId?: number;
    price: number;
    isMonthly: boolean;
  }[];
  summary: number;
}

type Store = {
  data: User;
  setData: (data: User) => void;
};

export const useMultiStepStore = create<Store>((set) => ({
  data: {
    email: "",
    username: "",
    phone: 0,
    addOns: [
      {
        id: 0,
        price: 0,
        isChecked: false,
      },
      {
        id: 0,
        price: 0,
        isChecked: true,
      },
    ],
    plan: [
      {
        id: 0,
        price: 0,
        isMonthly: true,
      },
    ],
    summary: 0,
  },
  setData: (data) => set({ data: data }),
}));
