import {useState,useEffect} from 'react';

export const useFecth = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async (url) => {
            try{
                let res = await fetch(url);
                if(!res.ok){
                    throw{
                        err:true, 
                        status:res.status, 
                        statusText:!res.statusText ? "Evento de Error": res.statusText}
                }

            }catch(err){

            }

            let res = await fetch(url),
            json = await res.json();
            //console.log(json);
    
            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                json = await res.json();
    
                //console.log(json);
            let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
            };
    
            setPokemons((pokemons) => [...pokemons, pokemon]);
          });
        };
    
        getData(url);
      }, [url]);

} 