import type { NavigationItem } from "../../data/navigation";

const NavLink=({label,href}:NavigationItem)=>{
    return(
        <a
      href={href}
      className="
        relative
        font-medium
        text-gray-700
        dark:text-gray-300
        transition-colors
        duration-300
        hover:text-blue-600
        dark:hover:text-blue-400
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:w-0
        after:bg-blue-600
        after:transition-all
        after:duration-300
        hover:after:w-full
      "
    >
      {label}
    </a>
    )
}
export default NavLink;