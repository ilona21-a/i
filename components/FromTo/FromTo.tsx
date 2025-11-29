"use client";
import { useId } from "react";
import styles from "./FromTo.module.css";

interface FromToProps {
  from: string;
  to: string;
  setFrom: (from: string) => void;
  setTo: (to: string) => void;
}

const FromTo = ({ from, to, setFrom, setTo }: FromToProps) => {
  const fieldId = useId();

  const formatWithLabel = (value: string, label: string) => {
    if (value === "") return "";
    const numberValue = Number(value);
    const localized = numberValue.toLocaleString("en-US");
    return `${label} ${localized}`;
  };

  const extractNumber = (input: string, label: string) => {
    const withoutLabel = input.replace(label, "");
    const withoutSpaces = withoutLabel.replaceAll(" ", "");
    const withoutCommas = withoutSpaces.replaceAll(",", "");
    return withoutCommas;
  };

  const validateNumber = (value: string) => {
    return /^\d*$/.test(value);
  };

  const processFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const extracted = extractNumber(inputValue, "From");
    
    if (validateNumber(extracted)) {
      setFrom(extracted);
    }
  };

  const processToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const extracted = extractNumber(inputValue, "To");
    
    if (validateNumber(extracted)) {
      setTo(extracted);
    }
  };

  const fromFieldId = `mileage-from-${fieldId}`;
  const toFieldId = `mileage-to-${fieldId}`;

  return (
    <div className={styles.fromtoWrapper}>
      <div className={`${styles.blockFrom} ${styles.block}`}>
        <label className={styles.label} htmlFor={fromFieldId}>
          Car mileage / km
        </label>
        <input
          id={fromFieldId}
          type="text"
          inputMode="numeric"
          placeholder="From"
          value={formatWithLabel(from, "From")}
          onChange={processFromChange}
        />
      </div>

      <div className={`${styles.blockTo} ${styles.block}`}>
        <label
          className={styles.label}
          htmlFor={toFieldId}
          style={{ color: "transparent" }}
        >
          To
        </label>
        <input
          id={toFieldId}
          type="text"
          inputMode="numeric"
          placeholder="To"
          value={formatWithLabel(to, "To")}
          onChange={processToChange}
        />
      </div>
    </div>
  );
};

export default FromTo;