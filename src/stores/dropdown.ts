import { defineStore } from "pinia";

export const useDropdownStore = defineStore("dropdown", {
  state: () => ({
    isOpen: {
      hamburger: false,
      profile: false,
    },
  }),
  actions: {
    // Otwórz konkretny dropdown, zamykając wszystkie inne
    toggleDropdown(menuType) {
      // Resetujemy wszystkie dropdowny
      for (const key in this.isOpen) {
        this.isOpen[key] = false;
      }

      // Otwieramy wskazany dropdown
      this.isOpen[menuType] = true;
    },
    // Zamknij wszystkie dropdowny
    closeAllDropdowns() {
      for (const key in this.isOpen) {
        this.isOpen[key] = false;
      }
    },
  },
});
