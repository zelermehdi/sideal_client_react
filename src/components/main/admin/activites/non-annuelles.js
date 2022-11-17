import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Ponctuelles(props) {
  const [ponctuelles, SetPonctuelles] = useState([]);

  useEffect(() => {
    axios.get(`http://sideal-refonte-api.local/api/ponctuel`).then((res) => {
      const ponctuelles = res.data;
      SetPonctuelles(ponctuelles);
    });
  }, []);

  const type = {
    1: "activites unique",
    0: "activites annuelles",
    2: "activites ponctuelles",
  };
  const convert = {
    0: "oui",
    1: "non",
  };

  return (
    <div>
      <h4>Activités Ponctuelles</h4>

      <Table striped>
        <thead>
          <tr>
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
          {ponctuelles.map((activite) => {
            return (
              <tr>
                <td>{activite.title}</td>
                <td>{activite.file_title}</td>
                <td style={{ backgroundColor:[activite.color] }}></td>
                <td> {convert[activite.require_approval]}</td>
                <td>{convert[activite.adult_only]}</td>
                <td>{convert[activite.kid_only]}</td>
                <td>{convert[activite.adult_sideal_value]}</td>
                <td>{convert[activite.adult_out_sideal_value]}</td>
                <td>{convert[activite.kid_sideal_value]}</td>
                <td>{convert[activite.kid_out_sideal_value]}</td>
                <td>{activite.day}</td>
                <td>{activite.credit_id} </td>
                <td>{type[activite.type]}</td>
                <td>{activite.starts_at}</td>
                <td>{activite.ends_at}</td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Ponctuelles;
