"use client";

import { Brand } from "@/types/brands";
import Select from "../Select/Select";
import { useState } from "react";
import styles from "./Filters.module.css";
import FromTo from "../FromTo/FromTo";
import { type Filters } from "@/types/filters";

interface FiltersProps {
  brands: Brand[];
  onClick: (filters: Filters) => void;
}

const Filters = ({ brands, onClick }: FiltersProps) => {
  const [filterState, setFilterState] = useState({
    brand: "",
    price: "",
    from: "",
    to: "",
  });

  const availablePrices = ["30", "40", "50", "60", "70", "80", "90", "100"];

  const handleBrandChange = (value: string) => {
    setFilterState((prev) => ({ ...prev, brand: value }));
  };

  const handlePriceChange = (value: string) => {
    setFilterState((prev) => ({ ...prev, price: value }));
  };

  const handleFromChange = (value: string) => {
    setFilterState((prev) => ({ ...prev, from: value }));
  };

  const handleToChange = (value: string) => {
    setFilterState((prev) => ({ ...prev, to: value }));
  };

  const submitFilters = () => {
    onClick(filterState);
  };

  return (
    <div className={styles.filters}>
      <Select
        label="Car brand"
        value={filterState.brand}
        onChange={handleBrandChange}
        options={brands}
        placeholder="Choose a brand"
      />

      <Select
        label="Price/ 1 hour"
        value={filterState.price}
        onChange={handlePriceChange}
        options={availablePrices}
        placeholder="Choose a price"
      />

      <FromTo
        from={filterState.from}
        to={filterState.to}
        setFrom={handleFromChange}
        setTo={handleToChange}
      />

      <button
        className={styles.button}
        type="button"
        onClick={submitFilters}
      >
        Search
      </button>
    </div>
  );
};

export default Filters;