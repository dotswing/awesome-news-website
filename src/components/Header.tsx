import MenuButton from "./MenuButton";

export default function Header({}) {
  return (
    <>
      <nav className="py-8">
        <h1 className="py-4 text-3xl font-bold">AWESOME NEWS</h1>
        <ul className="flex border-b">
          {[
            ['Home', '/dashboard'],
            ['Tech', '/tech'],
            ['Entertainment', '/entertainment'],
            ['Games', '/games'],
          ].map(([title, path]) => (
            <MenuButton key={title} title={title} path={path}/>
          ))}
        </ul>
      </nav>
    </>
  );
}