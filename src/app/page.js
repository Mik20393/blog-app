import styles from "./page.module.css";

import HeroImage from "@/components/hero-img";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <HeroImage />
        <h1>Home Page</h1>
      </main>
      <main className={styles.home}>
        <h1>About Page</h1>
      </main>
    </>
  );
}
