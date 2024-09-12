import { defineStore } from "pinia";

defineStore("user", {
  state: () => ({
    isLoggeIn: false,
  }),
  actions: {
    loginUser() {
      this.isLoggeIn = true;
    },
  },
});
