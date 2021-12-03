import Footer from "./footer";
import Profile from "./profile";
import MenuItem from "./menu-item";

interface propsType {
  active: "overview" | "transactions" | "setting";
}

export default function SidebarMember({ active }: propsType) {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="overview"
            link="/member"
            active={active === "overview"}
          />
          <MenuItem
            title="Transactions"
            icon="transaction"
            link="/member/transactions"
            active={active === "transactions"}
          />
          <MenuItem title="Messages" icon="message" link="/member" />
          <MenuItem title="Card" icon="card" link="/member" />
          <MenuItem title="Rewards" icon="reward" link="/member" />
          <MenuItem
            title="Settings"
            icon="setting"
            link="/member/edit-profile"
            active={active === "setting"}
          />
          <MenuItem title="Log Out" icon="power" link="/sign-out" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
