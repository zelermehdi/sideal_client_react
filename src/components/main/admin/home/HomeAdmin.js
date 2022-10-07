import SectionDemande from "../../../general/SectionDemande/SectionDemande";
import SectionInfo from "components/general/sectionInfo/SectionInfo";

function HomeAdmin() {
  return (
    <div>
      <h2>Home page Admin</h2>
      <h4>demandes en attente</h4>
      <SectionDemande />
      <h4>notifications</h4>
      <SectionInfo />
    </div>
  );
}
export default HomeAdmin;
