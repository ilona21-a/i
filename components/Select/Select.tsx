import { useState, useRef, useEffect } from "react";
import styles from "./Select.module.css";

interface SelectProps {
  label: string;
  value: string;
  onChange: (option: string) => void;
  options: string[];
  placeholder: string;
}

const Select = ({
  label,
  value,
  onChange,
  options,
  placeholder,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((current) => !current);
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const displayValue = value || placeholder;
  const arrowDirection = isOpen ? styles.arrowUp : styles.arrowDown;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (selectRef.current && !selectRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={selectRef}>
      <p className={styles.labelText}>{label}</p>

      <div className={styles.selectBox}>
        <button
          className={styles.trigger}
          onClick={toggleDropdown}
          type="button"
        >
          {displayValue}
          <svg
            className={`${styles.arrowIcon} ${arrowDirection}`}
            width="16"
            height="16"
          >
            <use href="sprite.svg#icon-arrow"></use>
          </svg>
        </button>

        {isOpen && (
          <ul className={styles.optionsList}>
            {options.map((item) => (
              <li
                key={item}
                className={styles.option}
                onClick={() => handleOptionClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;