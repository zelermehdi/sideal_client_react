import Form from 'react-bootstrap/Form';
import "./select.css";

function SelectMenu() {
  return (
    <Form.Select aria-label="Default select example" className='select'>
      <option className='color'>Membre actif
      </option>
      <option value="1">Thomas</option>
      <option value="2">Cyril</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

export default SelectMenu;