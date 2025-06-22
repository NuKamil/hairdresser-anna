import { defineStore } from "pinia";
import axios from "axios";
import getHairServices from "@/api/getHairServices";
import { HairService } from "@/api/types";

export const FETCH_HAIR_SERVICES: string = "FETCH_HAIR_SERVICES";
export const CREATE_HAIR_SERVICES: string = "CREATE_HAIR_SERVICES";

export type HairServiceState = {
  hairServices: HairService[];
}

export const useHairServicesStore = defineStore("hairServices", {
  state: (): HairServiceState => ({
    hairServices: [] as HairService[],
  }),
  actions: {
    async [FETCH_HAIR_SERVICES]() {
      this.hairServices = [];
      try {
        const data: HairService[] = await getHairServices();
        this.hairServices = data;
      } catch (e) {
        console.error("Nie udało się pobrać usług:", e);
      }
    },
    async [CREATE_HAIR_SERVICES](payload: {
      name: string;
      price: number;
      duration: number;
      entityTypeId: string;
      serviceTypeId: string;
      isActive: boolean;
      description?: string;
    }) {
      // wywołanie POST do backendu
      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/hair-services`,
        {
          Name: payload.name,
          Price: payload.price,
          Duration: payload.duration,
          EntityTypeId: payload.entityTypeId,
          ServiceTypeId: payload.serviceTypeId,
          IsActive: payload.isActive,
          Description: payload.description,
        }
      );
      // po sukcesie odśwież listę
      await this[FETCH_HAIR_SERVICES]();
    },
  },
  getters: {
    count: (state) => state.hairServices.length,
  },
});
