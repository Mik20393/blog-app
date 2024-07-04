import Image from 'next/image';
import styles from "./page.module.css";

import HeroImage from "@/components/hero-img";
import Section from "@/components/section";
import TwoColumnLayout from "@/components/two-column-layout";

import bannerImage from '@/public/pilates_tile.png';

export default function Home() {
  return (
    <>
      <section className={styles.baseSection} id="home">
        <HeroImage src={bannerImage} alt="Image of Robyn in a pilates pose"/>
        <div className={styles.mainTitle}>
          <h1>Move</h1>
          <h1>With</h1>
          <h1>Robyn</h1>
        </div>
      </section>
      <section className={styles.baseSection} id="about">
        <div className={styles.sectionTitle}>
          <h1>About Section</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.baseContainer}>
                <Image
                className={styles.img} 
                src={bannerImage} 
                alt="Image of Robyn in a pilates pose"
                />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.baseContainer}>
              <h1>Text Container</h1>
              <h3>Here you can write</h3>
              <h3>Some stuff about</h3>
              <h3>what you do</h3>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.baseSection} id="classes">
        <div className={styles.sectionTitle}>
          <h1>Classes</h1>
        </div>
        <div className={styles.content}>
          <ul>
            <li>Class 1</li>
            <li>Class 2</li>
            <li>Class 3</li>
          </ul>
        </div>
      </section>
      <section className={styles.baseSection} id="contact">
      <div className={styles.sectionTitle}>
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
