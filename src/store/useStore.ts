import create from 'zustand';

const useStore = create((set) => ({
    isDarkMode: true,
    toggleDarkMode: () => set((state:any) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useStore;
