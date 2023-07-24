import Image from "next/image";
import styles from "./blog.module.css";

const blog = {
  title: "blog title",
  desc: "blog desc a sat",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  author: {
    name: "author",
    image: "/illustration.png",
  },
  image: "/websites.jpg",
};
const blogPost = ({ params }) => {
  return (
    <section className={styles.blog}>
      <div className={styles.blog_top}>
        <div className={styles.blog_info}>
          <h1>{blog.title}</h1>
          <p>{blog.desc}</p>
          <div className={styles.author}>
            <Image
              src={blog.author.image}
              width="40"
              height="40"
              alt="author"
            />

            <span>{blog.author.name}</span>
          </div>
        </div>

        <div className={styles.blog_image}>
          <Image src={blog.image} alt="blog image" layout="fill" />
        </div>
      </div>

      <div className={styles.blog_text}>
        <p>{blog.text}</p>
      </div>
    </section>
  );
};

export default blogPost;
