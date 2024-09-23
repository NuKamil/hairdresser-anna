import { defineStore } from "pinia";

export interface DropdownIsOpen {
  hamburger: boolean;
  profile: boolean;
}

export interface DropdownState {
  isOpen: DropdownIsOpen;
}

export const useDropdownStore = defineStore("dropdown", {
  state: (): DropdownState => ({
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
      this.isOpen[menuType] = !this.isOpen[menuType];
    },
    // Zamknij wszystkie dropdowny
    closeAllDropdowns() {
      for (const key in this.isOpen) {
        this.isOpen[key] = false;
      }
    },
  },
});
