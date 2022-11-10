import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Activites(props) {
  const [activites, setactivites] = useState([]);

  useEffect(() => {
    axios.get(`http://sideal-refonte-api.local/api/activities`).then((res) => {
      const activites = res.data;
      console.log(activites);
      setactivites(activites);
    });
  }, []);

  const translation = {
    Monday: "Lundi",
    Tuesday: "Mardi",
    Wednesday: "Mercredi",
    Thursday: "Jeudi",
    Friday: "Vendredi",
    Saturday: "Samedi",
    Sunday: "Dimanche",
  };

  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>titre</th>
          <th>titre du document</th>
          <th>couleur</th>
          <th>exiger l'approbation</th>
          <th>adulte seulement</th>
          <th>enfants seulement</th>
          <th>adulte sideal</th>
          <th>adulte hors sideal</th>
          <th> enfants sideal</th>
          <th>enfants hors sideal</th>
          <th>jour</th>
          <th>crédit</th>
          <th>type</th>
          <th>heure du début</th>
          <th>heure de fin </th>
        </tr>
      </thead>
      <tbody>
        {activites.map((activite) => {
          console.log(activite);
          return (
            <tr>
              <td>{activite.id}</td>
              <td>{activite.title}</td>
              <td>{activite.file_title}</td>
              <td>
                <input type="color" id="head" name="head" value="#e66465" />
              </td>
              <td> {activite.require_approval}</td>
              <td>{activite.adult_only}</td>
              <td>{activite.kid_only}</td>
              <td>{activite.adult_sideal_value}</td>
              <td>{activite.adult_out_sideal_value}</td>
              <td>{activite.kid_sideal_value}</td>
              <td>{activite.kid_out_sideal_value}</td>
              <td>{translation[activite.day]}</td>
              <td>{activite.credit_id} </td>
              <td>{activite.type}</td>
              <td>{activite.starts_at}</td>
              <td>{activite.ends_at}</td>
              <td></td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Activites;
