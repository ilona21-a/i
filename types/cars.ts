import { Brand } from "./brands";

export interface FetchCarsParams {
  page: string | number;
  perPage: string | number;
  brand?: Brand;
  price?: string;
  minMileage?: string;
  maxMileage?: string;
}

export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
}

export interface FetchCarsResponse {
  cars: Car[];
  totalCars: number;
  page: number | string;
  totalPages: number;
}
