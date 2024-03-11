import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomhooks = () => {

    const {counter, increment, decrement} = useCounter(1);
    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    // const {id, name, sprites = []} = data;
  return (
    <>
        <h1>Pokemon Info</h1>
        <hr />

        { isLoading 
        ? <LoadingMessage /> 
        : <PokemonCard 
            id={data?.id} 
            name={data?.name} 
            sprites={ [
                data?.sprites.front_default,
                data?.sprites.front_shiny,
                data?.sprites.back_default,
                data?.sprites.back_shiny
            ]} />}

        <h2> {data?.name} </h2>

        <button
            className="btn btn-primary mt-2"
            onClick={ () => counter > 1 ? decrement() : null }
        >
        Anterior
        </button>

        <button
            className="btn btn-primary mt-2"
            onClick={ () => increment() }
        >
        Siguiente
        </button>
</>
  )
}
