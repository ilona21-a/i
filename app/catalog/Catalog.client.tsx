"use client";

import CarsList from "@/components/CarsList/CarsList";
import Filters from "@/components/Filters/Filters";
import { fetchBrands, fetchCars } from "@/lib/api/api";
import { Filters as FiltersType } from "@/types/filters";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { useState } from "react";
import styles from "./Catalog.module.css";

const ITEMS_PER_PAGE = 12;

const CatalogClient = () => {
  const [activeFilters, setActiveFilters] = useState<FiltersType>();

  const { data: brandsList } = useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  const {
    data: carsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isLoading,
  } = useInfiniteQuery({
    queryKey: [
      "cars",
      ITEMS_PER_PAGE,
      activeFilters?.brand,
      activeFilters?.price,
      activeFilters?.from,
      activeFilters?.to,
    ],
    queryFn: ({ pageParam = 1 }) =>
      fetchCars({
        page: pageParam,
        perPage: ITEMS_PER_PAGE,
        brand: activeFilters?.brand,
        price: activeFilters?.price,
        minMileage: activeFilters?.from,
        maxMileage: activeFilters?.to,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const currentPage = Number(lastPage.page);
      const isLastPage = lastPage.totalPages === currentPage;
      return isLastPage ? undefined : currentPage + 1;
    },
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  const allCars = carsData?.pages.flatMap((page) => page.cars) ?? [];
  const showLoadMore = hasNextPage && !isFetchingNextPage;

  const handleLoadMore = () => {
    fetchNextPage();
  };

  return (
    <main className={styles.catalog}>
      {brandsList && <Filters brands={brandsList} onClick={setActiveFilters} />}
      
      {isLoading && <p className={styles.message}>Loading...</p>}
      {error && <p className={styles.errorMessage}>There is an error</p>}
      
      {allCars.length > 0 && <CarsList cars={allCars} />}
      
      {showLoadMore && (
        <button
          className={styles.loadMoreBtn}
          type="button"
          onClick={handleLoadMore}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </main>
  );
};

export default CatalogClient;