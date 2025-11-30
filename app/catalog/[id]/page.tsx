import { fetchCarById } from "@/lib/api/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CarInfoClient from "./CarInfo.client";

const CarInfo = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["car", id],
    queryFn: () => fetchCarById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CarInfoClient />
    </HydrationBoundary>
  );
};

export default CarInfo;