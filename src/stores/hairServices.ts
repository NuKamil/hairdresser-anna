import { defineStore } from "pinia";
import getHairServices from "@/api/getHairServices";
import { HairService } from "@/api/types";

export const FETCH_HAIR_SERVICES: string = "FETCH_HAIR_SERVICES";
export type HairServiceState = {
  hairServices: HairService[];
}


export const useHairServicesStore = defineStore("hairServices", {
  state: (): HairServiceState => ({
    hairServices: [],
  }),
  actions: {
    async [FETCH_HAIR_SERVICES]() {
      const hairServices = await getHairServices();
      this.hairServices = hairServices;
    },
  },
  getters: {
    count: (state) => state.hairServices.length,
  }
})