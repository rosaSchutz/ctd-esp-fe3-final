import React from 'react'
import Form from '../Components/Form'
import '../styles/contact.css';
import { useContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useContextGlobal();
  return (
    <div className='contact'>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form state={state}/>
    </div>
  )
}

export default Contact