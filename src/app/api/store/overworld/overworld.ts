import { create } from "zustand";

const useOverworldX = create((set) => ({
  X: 0,
  handleX: (newValue: number) => set({ X: newValue }),
}));

const useOverworldY = create((set) => ({
  Y: 0,
  handleY: (newValue: number) => set({ Y: newValue }),
}));

const useOverworldZ = create((set) => ({
  Z: 0,
  handleZ: (newValue: number) => set({ Z: newValue }),
}));

export { useOverworldX, useOverworldY, useOverworldZ };
