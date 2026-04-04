import { create } from 'zustand';

export const useFilterStore = create((set) => ({
  region: null,
  district: null,
  occupation: null,
  charge: null,

  districts: [],
  occupations: [],
  charges: [],

  setRegion: (region: string | null) => set({ region }),
  setDistrict: (district: string | null) => set({ district }),
  setOccupation: (occupation: string | null) => set({ occupation }),
  setCharge: (charge: string | null) => set({ charge }),

  resetFilters: () =>
    set({
      region: null,
      district: null,
      occupation: null,
      charge: null,
    }),

  setDistricts: (districts: string[]) => set({ districts }),
  setOccupations: (occupations: string[]) => set({ occupations }),
  setCharges: (charges: string[]) => set({ charges }),
}));
