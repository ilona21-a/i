import { Car } from "@/types/cars";
import css from "./CarInfoText.module.css";

interface CarInfoTextProps {
  car: Car;
}

const CarInfoText = ({ car }: CarInfoTextProps) => {
  return (
    <div className={css.infoWrapper}>
      <div className={css.heading}>
        <h2 className={css.title}>
          {car.brand} {car.model}, {car.year}
        </h2>
        <p className={css.id}>Id: {car.id}</p>
      </div>
      <div className={css.placeNMileage}>
        <div className={css.place}>
          <svg className={css.placeIcon} width="16" height="16">
            <use href="/sprite.svg#icon-location"></use>
          </svg>
          <p>{car.address}</p>
        </div>
        <div className={css.mileage}>
          <p>
            Mileage:{" "}
            {`${car.mileage.toLocaleString("en-US").replace(/,/g, " ")} km`}
          </p>
        </div>
      </div>
      <p className={css.price}>${car.rentalPrice}</p>
      <p className={css.description}>{car.description}</p>
      <div className={css.lists}>
        <div className={css.rentalConditions}>
          <p className={css.listTitle}>Rental Conditions: </p>
          <ul>
            {car.rentalConditions.map((condition) => (
              <li className={css.listItem} key={condition}>
                <svg className={css.check} width="16" height="16">
                  <use href="/sprite.svg#icon-check"></use>
                </svg>
                <p>{condition}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.carSpecifications}>
          <p className={css.listTitle}>Car Specifications:</p>
          <ul>
            <li className={css.listItem}>
              <svg className={css.check} width="16" height="16">
                <use href="/sprite.svg#icon-calendar"></use>
              </svg>
              <p>Year: {car.year}</p>
            </li>
            <li className={css.listItem}>
              <svg className={css.check} width="16" height="16">
                <use href="/sprite.svg#icon-car"></use>
              </svg>
              <p>Type: {car.type}</p>
            </li>
            <li className={css.listItem}>
              <svg className={css.check} width="16" height="16">
                <use href="/sprite.svg#icon-fuel-pump"></use>
              </svg>
              <p>Fuel Consumption: {car.fuelConsumption}</p>
            </li>
            <li className={css.listItem}>
              <svg className={css.check} width="16" height="16">
                <use href="/sprite.svg#icon-gear"></use>
              </svg>
              <p>Engine Size: {car.engineSize}</p>
            </li>
          </ul>
        </div>
        <div className={css.accessoriesNFunc}>
          <p className={css.listTitle}>Accessories and functionalities:</p>
          <ul>
            {car.accessories.map((acc) => (
              <li className={css.listItem} key={acc}>
                <svg className={css.check} width="16" height="16">
                  <use href="/sprite.svg#icon-check"></use>
                </svg>
                <p>{acc}</p>
              </li>
            ))}
            {car.functionalities.map((func) => (
              <li className={css.listItem} key={func}>
                <svg className={css.check} width="16" height="16">
                  <use href="/sprite.svg#icon-check"></use>
                </svg>
                <p>{func}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarInfoText;