import { useEffect, useState } from "react";
import Container from "../Common/Container";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import Button from "../Common/Button/Button";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/90 shadow-md backdrop-blur dark:border-gray-700 dark:bg-gray-900/90 ">
        <Container>
          <nav className="flex h-20 items-center justify-between px-6">
            <Logo />
            <div className="flex items-center gap-8">
              <DesktopNav />
              <a href="/GK_Resume.pdf" download className="hidden md:block">
                <Button variant="primary">Resume</Button>
              </a>
              <button
                onClick={toggleTheme}
                className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                aria-label={
                  theme === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
              >
                {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
              </button>
              <button
                className="flex md:hidden"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="Toggle Menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </nav>
        </Container>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
export default Navbar;
