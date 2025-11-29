import { Brand } from "@/types/brands";
import { Car, FetchCarsParams, FetchCarsResponse } from "@/types/cars";
import axios from "axios";
axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const fetchCars = async ({
  page,
  perPage,
  brand,
  price,
  minMileage,
  maxMileage,
}: FetchCarsParams): Promise<FetchCarsResponse> => {
  try {
    const res = await axios.get<FetchCarsResponse>("/cars", {
      params: {
        page,
        limit: perPage,
        brand,
        rentalPrice: price,
        minMileage,
        maxMileage,
      },
    });
    return res.data;
  } catch {
    throw new Error("Error fetching cars");
  }
};

export const fetchCarById = async (id: string): Promise<Car> => {
  try {
    const res = await axios.get<Car>(`/cars/${id}`);
    return res.data;
  } catch {
    throw new Error("Error fetching car by id");
  }
};

export const fetchBrands = async (): Promise<Brand[]> => {
  try {
    const res = await axios.get<Brand[]>("/brands");
    return res.data;
  } catch {
    throw new Error("Error fetching brands");
  }
};
