"use client";

import { useRouter } from "next/navigation";
import styles from "./Home.module.css";

const Home = () => {
  const navigation = useRouter();

  const handleNavigate = () => {
    navigation.push("/catalog");
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Find your perfect rental car</h1>
        <p className={styles.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button
          className={styles.ctaButton}
          type="button"
          onClick={handleNavigate}
        >
          View Catalog
        </button>
      </div>
    </section>
  );
};

export default Home;