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
        <div className={styles.title}>
          <h1>About Section</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.column}>
            <h1>Column 1</h1>
          </div>
          <div className={styles.column}>
          <h1>Column 2</h1>
          </div>
        </div>
      </section>
      <section className={styles.baseSection} id="contact">
      <div className={styles.title}>
          <h1>Contact Section</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.column}>
            <h1>Column 1</h1>
          </div>
          <div className={styles.column}>
          <h1>Column 2</h1>
          </div>
        </div>
      </section>
    </>
  );
}
