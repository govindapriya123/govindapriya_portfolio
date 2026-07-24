import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

interface ContactItemProps {
  type: string;
  value: string;
}
const iconMap = {
  email: FiMail,
  phone: FiPhone,
  github: FiGithub,
  linkedin: FiLinkedin,
} as any;

const ContactItem = ({ type, value }: ContactItemProps) => {
  const hrefMap:any = {
    email: `mailto:${value}`,
    phone: `tel:${value}`,
    github: value,
    linkedin: value,
  };
  const Icon = iconMap[type];

  return (
    <a
      href={hrefMap[type]}
      target={type === "github" || type === "linkedin" ? "_blank" : undefined}
      rel={
        type === "github" || type === "linkedin"
          ? "noopener noreferrer"
          : undefined
      }
      className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition-all suration-300 hover:border-blue-500 hover:shadow-md dark:text-gray-400"
    >
      <Icon className="text-blue-600" size={22} />
      <span className="text-gray-700 dark:text-gray-400">
    {value}
  </span>
    </a>
  );
};
export default ContactItem;