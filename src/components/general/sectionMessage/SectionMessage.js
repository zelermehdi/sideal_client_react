import Badge from "react-bootstrap/Badge";
import "./SectionMessage.css";

function SectionMessage(props) {
  return (
    <section>
      <h4 className="mainTextColor mb-3">{props.title}</h4>
      <div className="secondaryBgColor" id="messageContainer">
        <ul className="p-3">
          {props.messages.map((message) => {
            return (
              <>
                <li className="bg-white p-3 my-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>20 -09-2022</span><Badge className="p-2" bg="success">{message.type}</Badge>
                  </div>
                  <div>
                    {message.message}
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default SectionMessage;
