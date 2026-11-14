import { create } from "zustand";

const useNetherX = create((set) => ({
  X: 0,
  handleX: (newValue: number) => set({ X: newValue }),
}));

const useNetherY = create((set) => ({
  Y: 0,
  handleY: (newValue: number) => set({ Y: newValue }),
}));

const useNetherZ = create((set) => ({
  Z: 0,
  handleZ: (newValue: number) => set({ Z: newValue }),
}));

export { useNetherX, useNetherY, useNetherZ };
