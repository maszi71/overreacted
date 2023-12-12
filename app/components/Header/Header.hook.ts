import { usePathname } from "next/navigation";

export const useHeader = () => {
  const pathname = usePathname();
  const pink = "#F9B3DC";
  const purple = "#CFB5FF";
  const logoStyle = {
    backgroundImage: `linear-gradient(45deg, ${pink}, ${purple})`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    transition: "all 0.3s",
  };
  return {
    pathname,
    logoStyle,
  };
};
