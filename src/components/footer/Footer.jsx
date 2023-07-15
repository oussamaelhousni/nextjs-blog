import Image from "next/image";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Made with ❤️ by Oussama Elhousni</p>
      <div className={styles.socials}>
        {new Array(1, 2, 3, 4).map((val) => {
          return (
            <Image
              src={`/${val}.png`}
              width="20"
              height="20"
              alt="social"
              className={styles.icon}
            />
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
