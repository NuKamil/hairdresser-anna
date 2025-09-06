import axios, { AxiosResponse } from "axios";
import type { Service } from "@/api/types";

const getServices = async (): Promise<Service[]> => {
	const baseUrl = import.meta.env.VITE_APP_API_URL;
	const url: string = `${baseUrl}/services`;
	const response: AxiosResponse<Service[], any> = await axios.get<Service[]>(url);

	return response.data;
};

export default getServices;
