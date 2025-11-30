"use client";

import { Car } from "@/types/cars";
import styles from "./CarsItem.module.css";
import Image from "next/image";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import Link from "next/link";

interface CarsItemProps {
  car: Car;
}

const formatMileage = (mileage: number) =>
  mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const extractCity = (address: string) => {
  const parts = address.split(",");
  return parts[parts.length - 1]?.trim() || address;
};

const CarsItem = ({ car }: CarsItemProps) => {
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const isLiked = isFavorite(car.id);

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(car.id);
  };

  return (
    <li className={styles.item}>
      <div className={styles.mainBlock}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            width={274}
            height={268}
          />
          <button
            type="button"
            className={`${styles.likeButton} ${isLiked ? styles.active : ""}`}
            onClick={handleLikeToggle}
            aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
          >
            <svg width="18" height="18">
              <use href={`/sprite.svg#${isLiked ? "icon-heart-active" : "icon-heart"}`} />
            </svg>
          </button>
        </div>

        <div className={styles.infoWrapper}>
          <p className={styles.info}>
            {car.brand} <span>{car.model}</span>, {car.year}
          </p>
          <p className={styles.price}>{car.rentalPrice}</p>
        </div>

        <ul className={styles.infoList}>
          <li>{extractCity(car.address)}</li>
          <li>{car.rentalCompany}</li>
          <li>{car.type}</li>
          <li>{car.model}</li>
          <li>{formatMileage(car.mileage)}</li>
        </ul>
      </div>

      <Link href={`/catalog/${car.id}`} className={styles.button}>
        Learn more
      </Link>
    </li>
  );
};

export default CarsItem;