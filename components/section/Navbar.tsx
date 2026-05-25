import Link from "next/link";
import { Nav_items } from "../../data/data";
import Container from "../Container";

function Navbar() {
  return (
    <nav className="navbar sticky z-30 top-0 w-full py-4 bg-surface-a10/80 backdrop-blur-sm border-b border-surface-a20">
      <Container>
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-xl font-bold text-white">
            <Link href="#">
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
