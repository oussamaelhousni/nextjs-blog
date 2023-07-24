import Image from "next/image";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h1>Let's keep in touch</h1>
      <div className={styles.container}>
        <div className={styles.contact_img}>
          <Image src="/contact.png" layout="fill" alt="contact image" />
        </div>
        <form className={styles.form}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Your name" id="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              id="email"
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message ..."
            ></textarea>
          </div>
          <button type="submit" className={styles.submit}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
