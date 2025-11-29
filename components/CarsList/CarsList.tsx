import { Car } from "@/types/cars";
import CarsItem from "../CarsItem/CarsItem";
import classes from "./CarsList.module.css";

interface CarsListProps {
  cars: Car[];
}

const CarsList = ({ cars }: CarsListProps) => {
  if (!cars || cars.length === 0) {
    return <p className={classes.emptyMessage}>No cars available</p>;
  }

  const renderCarItem = (vehicle: Car) => {
    return <CarsItem key={vehicle.id} car={vehicle} />;
  };

  return (
    <div className={classes.carsSection}>
      <ul className={classes.list}>
        {cars.map(renderCarItem)}
      </ul>
    </div>
  );
};

export default CarsList;