import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import '../styles/detail.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [odontologo, setOdontologo] = useState({});
  const params = useParams();
  console.log(params);
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url)
    .then((res) => setOdontologo(res.data))
    .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <h1 className="detail-h1">Detail Dentist {odontologo.id} </h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{odontologo.name}</td>
          <td>{odontologo.email}</td>
          <td>{odontologo.phone}</td>
          <td>{odontologo.website}</td>
        </tr>
      </table>
    </>
  );
};

export default Detail;
