import styles from "./page.module.css";

import HeroImage from "@/components/hero-img";

export default function Home() {
  return (
    <>
      <section className={styles.baseSection} id="home">
        <HeroImage />
        <h1>Home Page</h1>
      </section>
      <section className={styles.baseSection} id="about">
        <h1>About Section</h1>
      </section>
      <section className={styles.baseSection} id="contact">
        <h1>Contact Section</h1>
      </section>
    </>
  );
}
