// Beacuse we are using Local storage this function can only be called from the client. calling from the server will throw error
// "use client";

import { create } from "zustand";

const overworldX = localStorage.getItem("overworldX") ?? 0;
const overworldY = localStorage.getItem("overworldY") ?? 0;
const overworldZ = localStorage.getItem("overworldZ") ?? 0;

const useOverworldX = create((set) => ({
  X: Number(overworldX),
  handleX: (newValue: number) => {
    set({ X: newValue });
    localStorage.setItem("overworldX", newValue.toString());
  },
}));

const useOverworldY = create((set) => ({
  Y: Number(overworldY),
  handleY: (newValue: number) => {
    set({ Y: newValue });
    localStorage.setItem("overworldY", newValue.toString());
  },
}));

const useOverworldZ = create((set) => ({
  Z: Number(overworldZ),
  handleZ: (newValue: number) => {
    set({ Z: newValue });
    localStorage.setItem("overworldZ", newValue.toString());
  },
}));

export { useOverworldX, useOverworldY, useOverworldZ };
