import Image from "next/image"
import logo from "../../public/pokemon-logo.svg";
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<Boolean>(false);

  // for hydration mismatch problem
  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="flex justify-between pt-5 mb-10">
      <Image src={logo} width={150} height={75} alt="logo" />
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <SunIcon className="h-6 w-6 text-yellow-500" />
        ) : (
          <MoonIcon className="h-6 w-6 text-slate-600" />
        )}
      </button>
    </header>
  )
}
export default Header;