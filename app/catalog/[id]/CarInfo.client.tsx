"use client";

import { fetchCarById } from "@/lib/api/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./CarInfo.module.css";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import Form from "@/components/Form/Form";
import CarInfoText from "@/components/CarInfoText/CarInfoText";

const CarInfoClient = () => {
  const { id } = useParams<{ id: string }>();

  const { data: car, isLoading, error } = useQuery({
    queryKey: ["car", id],
    queryFn: () => fetchCarById(id),
    placeholderData: keepPreviousData,
  });

  const handleSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success("Successful booking!");
    } catch {
      toast.error("Could not book the car.");
    }
  };

  if (isLoading) return <p className={css.message}>Loading...</p>;
  if (error) return <p className={css.message}>There is an error</p>;
  if (!car) return null;

  return (
    <main className={css.main}>
      <div className={css.infoWrapper}>
        <div className={css.imageFormWrapper}>
          <Image
            className={css.image}
            src={car.img}
            alt={car.model}
            width={640}
            height={512}
          />
          <Form onSubmit={handleSubmit} />
        </div>
        <CarInfoText car={car} />
      </div>
      <Toaster />
    </main>
  );
};

export default CarInfoClient;