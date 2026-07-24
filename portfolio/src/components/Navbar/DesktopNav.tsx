import { navigationItems } from "../../data/navigation";
import NavLink from "../Common/NavLink";
const DesktopNav = () => {
  return (
    <ul className="hidden md:flex items-center gap-8">
      {navigationItems.map((item) => (
        <li key={item.label}>
         <NavLink
            label={item.label}
            href={item.href}
          />
        </li>
      ))}
    </ul>
  );
};
export default DesktopNav;
