import Image from "next/image"
import logo from "../../public/pokemon-logo.svg";
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<Boolean>(false);

    useEffect(() => {
        setMounted(mounted)
    }, []);

    return (
        <header className="flex justify-between p-5">
            <Image src={logo} width={150} height={75} alt="logo" />
            <button type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {
                    theme === "dark" ?
                        <MoonIcon className="h-6 w-6" /> :
                        <SunIcon className="h-6 w-6 text-blue-500" />
                }
            </button>
        </header>
    )
}
export default Header;