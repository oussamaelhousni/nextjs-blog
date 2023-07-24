import Image from "next/image";
import styles from "./category.module.css";
import { items } from "./data.js";

const getData = (category) => {
  return items[category];
};
const page = ({ params }) => {
  const data = getData(params.category);
  console.log(data);
  return (
    <div className={styles.category}>
      <h2>{params.category}</h2>
      <div className={styles.category_container}>
        {data?.map((item) => {
          return (
            <div className={styles.category_item}>
              <div className={styles.category_text}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button>See more</button>
              </div>
              <div className={styles.category_img}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
