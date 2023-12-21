import useThemeSwitcher from "./hook/useThemeSwitcher";

export default function ThemeSwitcher() {
  const [activeTheme, setTheme] = useThemeSwitcher();
  return (
    <div
      className="absolute top-6 md:left-[7%] lg:left-[10%] xl:left-[24%] left-[2%] z-[9999] cursor-pointer backdrop-blur-xl rounded-full"
      onClick={() => setTheme(activeTheme)}
    >
      {activeTheme === "light" ? (
        <img alt="" src="/svgs/moon.svg" className="w-[40px] h-[40px]" />
      ) : (
        <img alt="" src="/svgs/sun.svg" className="w-[40px] h-[40px]" />
      )}
    </div>
  );
}
