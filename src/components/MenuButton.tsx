import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IMenuButtonProps {
  title: string;
  path: string;
}
export default function MenuButton({ title, path }: IMenuButtonProps) {
  const [active, setActive] = useState(false);
  const router = useRouter()

  useEffect(() => {
    if (router.pathname.includes(path)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [path, router.pathname]);

  return (
    <>
      <li className="-mb-px mr-1">
        <Link className={active ? 'menu-active' : 'menu-inactive'} href={path}>
          {title}
        </Link>
      </li>
    </>
  );
}