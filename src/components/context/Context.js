import { createContext, useEffect, useState } from "react";

const NewContext = createContext();

const Context = (props) => {
    const [count, setCount] = useState(24);
    const URL = `https://pokeapi.co/api/v2/pokemon`;
    const [mons, setMons] = useState(null);
    useEffect(() => {
        const getPokemons = async (num) => {
            const url = await fetch(`${URL}?limit=${num}`);
            const json = await url.json();
            setMons(json.results)
        }
        getPokemons(count)
    }, [count])
    let owner = {
        "name": "Abhishek Pathak",
        "aka": "scor.cism",
        "apiUsed":`https://pokeapi.co/`,
        "apiName":`API used PokeAPI`
    };

    return (
        <NewContext.Provider value={{ mons, owner, count, setCount }}>
            {props.children}
        </NewContext.Provider>
    )
}

export { Context, NewContext };