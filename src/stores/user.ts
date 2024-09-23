import { defineStore } from "pinia";

export interface UserState {
  isLoggeIn: boolean;
  isSignIn: boolean;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    isLoggeIn: false,
    isSignIn: false,
  }),
  actions: {
    logInUser(): void {
      this.isLoggeIn = true;
    },
    toggleLoggin(): void {
      this.isLoggeIn = !this.isLoggeIn;
    },
    logOutUser(): void {
      this.isLoggeIn = false;
    },
    signUser(): void {
      this.isSignIn = true;
    },
  },
});
