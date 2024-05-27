import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main>
        <h1>Home Page</h1>
        <Link href="/about">About Us</Link>
      </main>
    </>
  );
}
