import Link from "next/link";
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
    <header>
      <Link href="/">Blog</Link>
      <nav>
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
