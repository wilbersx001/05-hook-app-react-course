// import { useEffect, useState } from "react";
// import { Message } from './Message'; // Corrección en la importación

import { useForm } from "../hooks/useForm";
// import { useEffect } from 'react';


export const FormWithCustomHook = () => {

  const {OnInputChange, username, email, password, onResetForm} = useForm({
    
      username: '',
      email: '',
      password: ''
  });


  // const {username, email, password} = formState;


  return (
    <>
      <h1>Formulario con Custom Hook</h1>
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
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={OnInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary">Borrar</button>



            {/* {
            (username === 'Strider2') && <Message />
          } */}
    </>

        
  );
};

// useEffect( () =>{
//   // console.log('UseEffect called!')
// }, []);

// useEffect( () =>{
//   // console.log('Username changed!')
// }, [username]);

// useEffect( () =>{
//   // console.log('Email changed!')
// }, [email]);

// useEffect( () =>{
//   // console.log('Password changed!')
// }, [password]);

// useEffect( () =>{
//   // console.log('FormState changed!')
// }, [formState]);
export default FormWithCustomHook;