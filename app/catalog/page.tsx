import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CatalogClient from "./Catalog.client";
import { fetchBrands, fetchCars } from "@/lib/api/api";

const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 12;

const Catalog = async () => {
  const client = new QueryClient();

  await Promise.all([
    client.prefetchInfiniteQuery({
      queryKey: ["cars", ITEMS_PER_PAGE, undefined, undefined, undefined, undefined],
      queryFn: () =>
        fetchCars({
          page: INITIAL_PAGE,
          perPage: ITEMS_PER_PAGE,
        }),
      initialPageParam: INITIAL_PAGE,
    }),
    client.prefetchQuery({
      queryKey: ["brands"],
      queryFn: fetchBrands,
    }),
  ]);

  const dehydratedState = dehydrate(client);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CatalogClient />
    </HydrationBoundary>
  );
};

export default Catalog;