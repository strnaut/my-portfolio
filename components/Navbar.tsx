import Link from "next/link";
import Container from "./Container";

const Nav_items = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <nav className="bg-surface-a10 py-4">
      <Container>
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-xl font-bold text-white">
            <Link href="/">
              <span className="text-primary-a0">Farghali</span>&apos;s Space
            </Link>
          </h1>
          <ul className="flex space-x-4 text-white">
            {Nav_items.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="inline-block hover:text-primary-a10 transition duration-200 cursor-pointer ease-in-out hover:-translate-y-0.5 hover:scale-105"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
