import Badge from "react-bootstrap/Badge";
import "./SectionMessage.css";

function SectionMessage(props) {
  return (
      <section id="messageSection">
        <h4>{props.title}</h4>
        <div id="message">
          {props.messages.map((message) => {
              return (
                <p>
                   <Badge bg="success">{message.type}</Badge>
                  <br></br>
                  {message.message}
                </p>
              );
            })}
        </div>
      </section>
  );
}

export default SectionMessage;
