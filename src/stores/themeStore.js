import {create} from 'zustand';

const useThemeStore = create((set) => ({
    darkMode: true,
    variant: 'glass',
    toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    setVariant: (newVariant) => set({ variant: newVariant }),
}));

export default useThemeStore;