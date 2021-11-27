import Link from "next/link";
import cx from "classnames";
import { useRouter } from "next/router";

interface MenuProps {
  title: string;
  link: string;
}

export default function Menu({ title, link }: MenuProps) {
  const router = useRouter();
  const currentRoute = router.pathname;
  const classMenu = cx({
    "nav-link": true,
    active: currentRoute === link,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={link} passHref>
        <a className={classMenu} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
