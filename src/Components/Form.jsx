import React from "react";
import { useState } from 'react'
import '../styles/form.css';


const Form = ({state}) => {
  const [cliente, setCliente] = useState({
    nombre: '',
    serie: ''
  })
  const [mostar, setMostar] = useState(false)
  const [error, setError] = useState(false)


  const handlerSumbit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (cliente.nombre.length > 5 && emailRegex.test(cliente.email)) {
      setMostar(true);
      setError(false);
    } else {
      setError(true);
      setMostar(false);
    }
  };
  
  return (
    <div className="container-form">
      <form className="form" onSubmit={handlerSumbit}>
        <input role='name' type="text" placeholder="Full name"
          value={cliente.nombre} onChange={(event) => setCliente({ ...cliente, nombre: event.target.value })} />
        <input role='email' type="email" placeholder="Email"
          value={cliente.email} onChange={(event) => setCliente({ ...cliente, email: event.target.value })} />
        <button className={`button-send button-send-${state.theme}`}>send</button>
      </form>
      {mostar && <p>Gracias <b>{cliente.nombre}</b>, te contactaremos cuanto antes vía email</p>}
      {error && <h5 style={{ color: 'red' }}>"Por favor verifique su información nuevamente".</h5>}
    </div>
  );
};

export default Form;






