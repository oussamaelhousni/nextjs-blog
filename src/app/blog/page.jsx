import Image from "next/image";
import styles from "./blog.module.css";
import Link from "next/link";
const Blog = () => {
  return (
    <section className={styles.blog}>
      {new Array(1, 2, 3, 4, 5, 6).map((val) => {
        return (
          <div className={styles.blog_item} key={val}>
            <div className={styles.blog_img}>
              <Image
                layout="fill"
                src="/websites.jpg"
                alt="blog image"
                sizes="200px"
              />
            </div>
            <div className={styles.blog_text}>
              <h3>
                <Link href={`/blog/${val}`}>blog item title</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                alias deserunt provident ipsum sapiente itaque magnam, nesciunt
                earum cupiditate eligendi! Reiciendis ab vel pariatur quam
                magni, animi eligendi vero repudiandae.
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Blog;
