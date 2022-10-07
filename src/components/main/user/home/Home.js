// import SectionInfo from '../../../general/sectionInfo/SectionInfo';
import SectionInfo from "components/general/sectionInfo/SectionInfo";
import SectionMessage from "../../../general/sectionMessage/SectionMessage";
import SectionDemande from "../../../general/SectionDemande/SectionDemande";
import "./Home.css";

function Home() {
  return (
    <div>
      <h2>Home page User</h2>
      <h4>notifications</h4>
      <SectionInfo />
      <h4>messages</h4>
      <SectionMessage />
    </div>
   
  );
}
export default Home;
