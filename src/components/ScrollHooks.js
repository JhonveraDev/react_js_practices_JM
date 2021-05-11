import React,{useState,useEffect} from 'react';

export default function ScrollHooks() {

    const [scrollY, setScrollY ] = useState(0);

    useEffect(()=>{
        console.log('Moviendo el Scroll')
        const detectarScroll=()=>{setScrollY(window.pageYOffset)}
        window.addEventListener("scroll",detectarScroll)

        return()=>{
            window.removeEventListener('scroll',detectarScroll);
            console.log('Fase de Desmotaje')
        }

    },[scrollY]);

    useEffect(()=>{
        console.log('Fase de montaje')
    },[]);

    
    useEffect(()=>{
        console.log('Fase dos de actualización')
    })

    useEffect(()=>{
        return ()=>{
            console.log('Fase de Desmontaje')
        }
    })

    return(
        <>
            <h2>Hooks - useEffect y Ciclo de Vida</h2>
            <p>Scroll Y del Navegador {scrollY} Pixeles</p>
        </>
    )
}

