import SidebarMember from "../../../components/organisms/sidebar-member";
import TransactionContent from "../../../components/organisms/transaction-content";

export default function Transaction() {
  return (
    <section className="transactions overflow-auto">
      <SidebarMember active="transactions" />
      <TransactionContent />
    </section>
  );
}
