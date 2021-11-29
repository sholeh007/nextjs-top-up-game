import Image from "next/image";
import Menu from "./menu";
import MenuItem from "./menu/menu-item";
import ProfileNav from "./profile-nav/auth";
import ToggleMenu from "./toggle-menu";

export default function Navbar() {
  const menuItem = MenuItem();

  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              {menuItem.map((item, i) => (
                <div key={i}>
                  <Menu title={item.title} link={item.link} />
                </div>
              ))}
              <ProfileNav isLogin={true} />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
