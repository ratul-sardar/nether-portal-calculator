// Beacuse we are using Local storage this function can only be called from the client. calling from the server will throw error

import { create } from "zustand";

const netherX = localStorage.getItem("netherX");
const netherY = localStorage.getItem("netherY");
const netherZ = localStorage.getItem("netherZ");

if (!netherX) localStorage.setItem("netherX", "0");
if (!netherY) localStorage.setItem("netherY", "0");
if (!netherZ) localStorage.setItem("netherZ", "0");

const useNetherX = create((set) => ({
  X: netherX,
  handleX: (newValue: number) => {
    set({ X: newValue });
    localStorage.setItem("netherX", newValue.toString());
  },
}));

const useNetherY = create((set) => ({
  Y: netherY,
  handleY: (newValue: number) => {
    set({ Y: newValue });
    localStorage.setItem("netherY", newValue.toString());
  },
}));

const useNetherZ = create((set) => ({
  Z: netherZ,
  handleZ: (newValue: number) => {
    set({ Z: newValue });
    localStorage.setItem("netherZ", newValue.toString());
  },
}));

export { useNetherX, useNetherY, useNetherZ };
