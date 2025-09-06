import { defineStore } from "pinia";
import axios from "axios";
import getServices from "@/api/getHairServices";
import { Service as Service } from "@/api/types";

export const FETCH_SERVICES: string = "FETCH_SERVICES";
export const CREATE_SERVICES: string = "CREATE_SERVICES";

export type ServiceState = {
	services: Service[];
}

export const useServicesStore = defineStore("services", {
	state: (): ServiceState => ({
		services: [] as Service[],
	}),
	actions: {
		async [FETCH_SERVICES]() {
			this.services = [];
			try {
				const data: Service[] = await getServices();
				this.services = data;
			} catch (e) {
				console.error("Nie udało się pobrać usług:", e);
			}
		},
		async [CREATE_SERVICES](payload: {
			name: string;
			price: number;
			duration: number;
			serviceCategoryId: string;
			serviceTypeId: string;
			isActive: boolean;
			description?: string;
		}) {
			// wywołanie POST do backendu
			await axios.post(
				`${import.meta.env.VITE_APP_API_URL}/services`,
				{
					Name: payload.name,
					Price: payload.price,
					Duration: payload.duration,
					serviceCategoryId: payload.serviceCategoryId,
					ServiceTypeId: payload.serviceTypeId,
					IsActive: payload.isActive,
					Description: payload.description,
				}
			);
			// po sukcesie odśwież listę
			await this[FETCH_SERVICES]();
		},
	},
	getters: {
		count: (state) => state.services.length,
	},
});
