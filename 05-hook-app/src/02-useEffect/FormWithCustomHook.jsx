import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

   const {formState, onInputChange, onResetForm, username, email, password} = useForm({
    username: '',
    email: '',
    password: ''
   });

//    const { username, email, password } = formState;

  return (
    <>
        <h1> Form with custom hook </h1>
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

        <input 
            type="password"
            name="password"
            className="form-control mt-2"
            placeholder="Password"
            value={ password }
            onChange={ onInputChange }
        />

        <button onClick={ onResetForm } className="btn btn-danger mt-2">
            Reset
        </button>

    </>
  )
}
