import { FiMoon, FiSun, FiX } from "react-icons/fi";
import { navigationItems } from "../../data/navigation";
import Logo from "./Logo";
import { useTheme } from "../../hooks/useTheme";
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      id="mobile-menu"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-500 bg-white dark:bg-gray-900  text-gray-900 
dark:text-gray-100  md:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex h-20 items-center justify-between border-b border-gray-700 px-6">
        <Logo />
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          <button onClick={onClose}>
            <FiX size={24} />
          </button>
        </div>
      </div>
      <ul className="flex flex-col p-6 gap-6">
        {navigationItems.map((item: any) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-lg font-medium 
              text-gray-700
              dark:text-gray-200 
              transition-colors
              hover:text-blue-600
              dark:hover:text-blue-400"
              onClick={onClose}
            >
              {item.label}
            </a>
          </li>
        ))}
        <a
          href="/GK_Resume.pdf"
          download
          onClick={onClose}
          className="text-lg font-medium hover:text-blue-600"
        >
          Resume
        </a>
      </ul>
    </div>
  );
};
export default MobileMenu;
