import SectionMessage from "components/general/sectionMessage/SectionMessage";
import stockData from "components/general/json/message";

function HomeAdmin() {
  return (
    <div>
      <h2>Home page Admin</h2>
      <h4>demandes en attente</h4>
      <SectionMessage title="Notifications" messages={stockData}/>
      <h4>notifications</h4>
      <SectionMessage title="Notifications" messages={stockData}/>
    </div>
  );
}
export default HomeAdmin;
