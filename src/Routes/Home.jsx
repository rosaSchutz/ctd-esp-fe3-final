import { useContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";
import "../styles/home.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContextGlobal();
  console.log("Data home:", state.data);

  return (
    <main>
      <h2>Home</h2>
      <div className="card-grid">
        {state.data.map((odontologo) => (
          <Card
            key={odontologo.id}
            odontologo={odontologo} 
            name={odontologo.name}
            username={odontologo.username}
            id={odontologo.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
