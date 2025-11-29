"use client";

import { Car } from "@/types/cars";
import classes from "./CarsItem.module.css";
import Image from "next/image";
import { useState } from "react";

interface CarsItemProps {
  car: Car;
}

const CarsItem = ({ car }: CarsItemProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  const iconName = isLiked ? "icon-heart-active" : "icon-heart";
  const heartClass = `${classes.heartSvg} ${isLiked ? classes.active : ""}`;

  return (
    <li className={classes.vehicleItem}>
      <div className={classes.container}>
        <div className={classes.imgBlock}>
          <Image
            className={classes.vehicleImg}
            src={car.img}
            alt={car.model}
            width={276}
            height={268}
          />
          <button
            type="button"
            className={classes.likeBtn}
            onClick={handleLikeToggle}
            aria-label="Toggle favorite"
          >
            <svg className={heartClass} width="16" height="16">
              <use href={`/sprite.svg#${iconName}`}></use>
            </svg>
          </button>
        </div>

        <div className={classes.infoBlock}>
          <div className={classes.topRow}>
            <h2 className={classes.carTitle}>
              {car.brand} <span>{car.model}</span>, {car.year}
            </h2>
            <p className={classes.priceText}>${car.rentalPrice}</p>
          </div>

          <ul className={classes.featuresList}>
            <li>{car.address}</li>
            <li>{car.rentalCompany}</li>
            <li>{car.type}</li>
            <li>{car.mileage}</li>
          </ul>
        </div>
      </div>

      <button type="button" className={classes.actionBtn}>
        Learn more
      </button>
    </li>
  );
};

export default CarsItem;