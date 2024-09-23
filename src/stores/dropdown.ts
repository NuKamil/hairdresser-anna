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
    toggleDropdown(menuType) {
      // Zapamiętaj aktualny stan menuType
      const currentState = this.isOpen[menuType];

      // Zamknij wszystkie dropdowny
      for (const key in this.isOpen) {
        this.isOpen[key] = false;
      }
      this.isOpen[menuType] = !currentState;
      console.log("Updated isOpen state:", this.isOpen);
    },
    // Zamknij wszystkie dropdowny
    closeAllDropdowns() {
      for (const key in this.isOpen) {
        this.isOpen[key] = false;
      }
      console.trace("Updated isOpen state:", this.isOpen);
    },
  },
});
