import OveriewContent from "../../components/organisms/content-member";
import SidebarMember from "../../components/organisms/sidebar-member";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SidebarMember />
      <OveriewContent />
    </section>
  );
}
