import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_text}>
        <h1>Better design for your digital products</h1>
        <p>
          Turing your ideas into reality,We bring together the teams from the
          global industry
        </p>
        <Link href="/">See our works</Link>
      </div>
      <div className={styles.hero_img}>
        <Image src="/hero.png" layout="fill" alt="hero image" />
      </div>
    </section>
  );
}
