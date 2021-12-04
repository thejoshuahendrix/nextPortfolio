import clsx from "clsx";
import { Container, Logo } from "components";
import { useOnClickOutside } from "lib";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import useSound from "use-sound";

import { useHeaderVisible } from "./libs/useHeaderVisible";

enum Themes {
  light = "light",
  dark = "dark",
}

enum Languages {
  en = "en",
}

const languages = [
  {
    id: Languages.en,
    name: "EN",
    flag: "🇺🇸",
  },
];

export const Header: FC = () => {
  const [playOnDark] = useSound("/sounds/dark-on.mp3");
  const [playOnLight] = useSound("/sounds/light-on.mp3");
  const visible = useHeaderVisible();
  const ref = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [langPicker, setLangPicker] = useState(false);

  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [language, setLanguage] = useState<string>(
    router.locale || Languages.en
  );

  const toggleTheme = useCallback(() => {
    if (theme === Themes.light) {
      playOnLight();
    } else {
      playOnDark();
    }

    setTheme(theme === Themes.light ? Themes.dark : Themes.light);
  }, [setTheme, theme, playOnDark, playOnLight]);

  const toggleLangPicker = useCallback(() => {
    setLangPicker((prev) => !prev);
  }, []);

  const turnOffLangPicker = useCallback(() => {
    setLangPicker(false);
  }, []);

  useOnClickOutside(ref, turnOffLangPicker);

  const toggleLanguage = useCallback(
    (newLanguage: Languages) => {
      return () => {
        turnOffLangPicker();
        setLanguage(newLanguage);
        if (newLanguage !== language)
          router.push("/", "/", { locale: newLanguage });
      };
    },
    [router, turnOffLangPicker, language]
  );

  useEffect(() => setMounted(true), []);

  return (
    <div
      className={clsx(
        "fixed z-20 w-full opacity-90 bg-lightTheme dark:bg-darkTheme transition-top duration-300",
        visible ? "top-0" : "-top-28"
      )}
    >
      <Container className="flex items-center justify-between w-auto py-5 md:py-9 text-black-900 dark:text-white-900">
        <Link href="/">
          <a href="/">
            <Logo className="w-24 fill-current md:w-28 dark:text-white-900 text-black-900" />
          </a>
        </Link>
        <div className="flex items-center">
          <button
            className="items-center justify-center w-12 h-12 rounded-md dark:bg-gray-900 bg-pink focus:outline-none focus:ring-2 ring-blue-700 d-flex"
            onClick={toggleTheme}
          >
            {mounted ? (
              theme === Themes.light ? (
                <HiMoon className="inline w-6 h-6 ml-1" />
              ) : (
                <HiSun className="inline w-6 h-6" />
              )
            ) : null}
          </button>
        </div>
      </Container>
    </div>
  );
};
