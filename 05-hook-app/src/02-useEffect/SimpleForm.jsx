import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'dante',
        email: 'dante@email.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect( () => {
        // console.log('Hey!');
    }, [])
   
    useEffect( () => {
        // console.log('Hey! Formstate changed');
    }, [formState])
 
    useEffect( () => {
        // console.log('Hey! email changed');
    }, [ email ])

  return (
    <>
        <h1> SimpleForm </h1>
        <hr />

        <input 
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="email"
            name="email"
            className="form-control mt-2"
            placeholder="user@mail.com"
            value={ email }
            onChange={ onInputChange }
        />

        {
            (username === 'dante2') && <Message />
        }
    </>
  )
}
