import axios, { AxiosResponse } from "axios";
import type { HairService } from "@/api/types";

const getHairServices = async (): Promise<HairService[]> => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url: string = `${baseUrl}/hair-services`;
  const response: AxiosResponse<HairService[], any> = await axios.get<HairService[]>(url);

  return response.data;
};

export default getHairServices;
