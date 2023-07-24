import Image from "next/image";
import styles from "./portfolio.module.css";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div className={styles.gallery}>
      <h2>Choose a gallery</h2>
      <div className={styles.gallery_container}>
        <div className={styles.gallery_item}>
          <Image
            src="/illustration.png"
            alt="illustration"
            layout="fill"
            sizes="200px"
          />
          <div className={styles.gallery_overlay}>
            <Link href="/portfolio/illustrations">Illustrations</Link>
          </div>
        </div>

        <div className={styles.gallery_item}>
          <Image
            src="/websites.jpg"
            alt="websites"
            layout="fill"
            sizes="200px"
          />
          <div className={styles.gallery_overlay}>
            <Link href="/portfolio/websites">Websites</Link>
          </div>
        </div>

        <div className={styles.gallery_item}>
          <Image
            src="/apps.jpg"
            alt="applications"
            layout="fill"
            sizes="200px"
          />
          <div className={styles.gallery_overlay}>
            <Link href="/portfolio/applications">Applications</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
