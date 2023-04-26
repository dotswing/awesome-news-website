import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Header() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode])

  return (
    <>
      <nav className={"py-8 relative " + (isDarkMode && "dark")}>
        <h1 className="py-4 text-3xl font-bold">AWESOME NEWS</h1>
        <ul className="flex border-b">
          {[
            ['Home', '/dashboard'],
            ['Tech', '/tech'],
            ['Entertainment', '/entertainment'],
            ['Health', '/health'],
            ['Politics', '/politics'],
            ['Science', '/science'],
          ].map(([title, path]) => (
            <MenuButton key={title} title={title} path={path}/>
          ))}
        </ul>
        <div className="absolute bottom-0 right-0 p-4">
          <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={25}
          />
        </div>
      </nav>
    </>
  );
}