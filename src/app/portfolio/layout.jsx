import styles from "./portfolio.module.css";

const layout = ({ children }) => {
  return (
    <div className={styles.main}>
      <h1>Our works</h1>
      {children}
    </div>
  );
};

export default layout;
