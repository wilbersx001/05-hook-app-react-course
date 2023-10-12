import { useEffect, useState } from "react";
import { Message } from './Message'; // Corrección en la importación


export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Strider",
    email: "juandelacruz@hotmail.com",
    contrasena: 112345
  });

  const { username, email, contrasena } = formState;

  const OnInputChange = ({target}) => {
    const {name, value} = target;
    console.log({name, value});
    setFormState({
        ...formState,
        [name]: value
    });
  }

  useEffect( () =>{
    // console.log('UseEffect called!')
  }, []);

  useEffect( () =>{
    // console.log('Username changed!')
  }, [username]);

  useEffect( () =>{
    // console.log('Email changed!')
  }, [email]);

  useEffect( () =>{
    // console.log('Password changed!')
  }, [contrasena]);

  useEffect( () =>{
    // console.log('FormState changed!')
  }, [formState]);


  return (
    <>
      <h1>Formulario simple</h1>
      <hr></hr>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={OnInputChange}
      />
      <input
        type="email"
        className="form-control mt-4"
        placeholder="juandelacruz@hotmail.com"
        name="email"
        value={email}
        onChange={OnInputChange}
      />

<input
        type="password"
        className="form-control mt-4"
        placeholder="Contrasena"
        name="contrasena"
        value={contrasena}
        onChange={OnInputChange}
      />
            {
            (username === 'Strider2') && <Message />
            }
    </>
  );
};

export default SimpleForm;