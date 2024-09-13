import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggeIn: false,
    isSignIn: false,
  }),
  actions: {
    logInUser() {
      this.isLoggeIn = true;
    },
    logOutUser() {
      this.isLoggeIn = false;
    },
    signUser() {
      this.isSignIn = true;
    },
  },
});
