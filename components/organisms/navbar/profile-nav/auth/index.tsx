import Image from "next/image";
import MenuProfile from "../menu-profile";
import Link from "next/link";

interface login {
  isLogin: boolean;
}

export default function authProfile({ isLogin }: login) {
  const menuProfile = MenuProfile();

  return (
    <>
      {!isLogin ? (
        <li className="nav-item my-auto">
          <Link href="/sign-in" passHref>
            <a
              className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
              role="button"
            >
              Sign In
            </a>
          </Link>
        </li>
      ) : (
        <li className="nav-item my-auto dropdown d-flex">
          <div className="vertical-line d-lg-block d-none"></div>
          <div>
            <Link href="#" passHref>
              <a
                className="dropdown-toggle ms-lg-40"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image
                  src="/img/avatar-1.png"
                  width={40}
                  height={40}
                  className="rounded-circle"
                  alt="profile"
                />
              </a>
            </Link>

            <ul
              className="dropdown-menu border-0"
              aria-labelledby="dropdownMenuLink"
            >
              {menuProfile.map((item, i) => (
                <li key={i}>
                  <Link href={item.link} passHref>
                    <a className="dropdown-item text-lg color-palette-2">
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      )}
    </>
  );
}
