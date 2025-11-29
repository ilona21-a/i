import styles from "./Home.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>404 - Page Not Found</h1>
      <p className={styles.errorText}>
        Oops! The page you&apos;re trying to reach doesn&apos;t exist.
      </p>
      <Link href="/" className={styles.homeLink}>
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;