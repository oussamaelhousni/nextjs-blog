import Link from "next/link";
import styles from "./navbar.module.css";
const links = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    name: "About",
    url: "/about",
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    name: "Dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Blog
      </Link>
      <nav className={styles.links}>
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.name}
          </Link>
        ))}
        <button className={styles.button}>Logout</button>
      </nav>
    </header>
  );
};

export default Navbar;
