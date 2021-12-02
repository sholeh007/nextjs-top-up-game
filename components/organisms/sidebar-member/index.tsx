import Footer from "./footer";
import Profile from "./profile";
import MenuItem from "./menu-item";

export default function SidebarMember() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="overview" active />
          <MenuItem title="Transactions" icon="transaction" />
          <MenuItem title="Messages" icon="message" />
          <MenuItem title="Card" icon="card" />
          <MenuItem title="Rewards" icon="reward" />
          <MenuItem title="Settings" icon="setting" />
          <MenuItem title="Log Out" icon="power" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
