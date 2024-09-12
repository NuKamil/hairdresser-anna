import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggeIn: true,
  }),
  actions: {
    loginUser() {
      this.isLoggeIn = true;
    },
  },
});
