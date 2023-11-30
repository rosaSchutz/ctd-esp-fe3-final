import React from "react";
import Card from "../Components/Card";
import "../styles/favs.css";

const Favs = () => {
  const fav = localStorage.getItem("fav");
  const favParsed = JSON.parse(fav);
  console.log(favParsed);

  return (
    <main className="">
      <h1 className="card-favs-h1">Dentists Favs</h1>
      <div className="card-grid">
        {favParsed.map((odontologo) => (
          <Card
            key={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
            id={odontologo.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Favs;
