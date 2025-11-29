"use client";

import { Car } from "@/types/cars";
import classes from "./CarsItem.module.css";
import Image from "next/image";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import Link from "next/link";

interface CarsItemProps {
  car: Car;
}

// Форматування пробігу з пробілами: 5000 -> "5 000"
const formatMileage = (mileage: number): string => {
  return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

// Витягуємо місто з адреси
const extractCity = (address: string): string => {
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

  const iconName = isLiked ? "icon-heart-active" : "icon-heart";
  const heartClass = `${classes.likeBtn} ${isLiked ? classes.active : ""}`;

  return (
    <li className={classes.vehicleItem}>
      <div className={classes.container}>
        <div className={classes.imgBlock}>
          <Image
            className={classes.vehicleImg}
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            width={276}
            height={268}
          />
          <button
            type="button"
            className={heartClass}
            onClick={handleLikeToggle}
            aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
          >
            <svg className={classes.heartSvg} width="18" height="18">
              <use href={`/sprite.svg#${iconName}`}></use>
            </svg>
          </button>
        </div>

        <div className={classes.infoBlock}>
          <div className={classes.topRow}>
            <h2 className={classes.carTitle}>
              {car.brand} <span>{car.model}</span>, {car.year}
            </h2>
            <p className={classes.priceText}>{car.rentalPrice}</p>
          </div>

          <ul className={classes.featuresList}>
            <li>{extractCity(car.address)}</li>
            <li>{car.rentalCompany}</li>
            <li>{car.type}</li>
            <li>{car.model}</li>
            <li>{formatMileage(car.mileage)} km</li>
          </ul>
        </div>
      </div>

      <Link href={`/catalog/${car.id}`} className={classes.actionBtn}>
        Read more
      </Link>
    </li>
  );
};

export default CarsItem;