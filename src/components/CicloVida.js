import React,{Component} from 'react';

export default class cicloVida extends Component{

    constructor(props){
        super(props)
        console.log(0,'El Componente se Inicializa, aun no esta en el DOM')

        this.state = {
            hora:new Date().toLocaleDateString,
        }
    }

    render(){
        console.log(4,'Componente se Dibuja')
        return(
            <div>
                <h2>Ciclo de Vida de los componentes de React JS</h2>
                <h3>{this.state.hora}</h3>
            </div>
        )
    }
}