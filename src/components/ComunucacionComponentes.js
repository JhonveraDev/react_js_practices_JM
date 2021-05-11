import React,{Component} from 'react';

export default class Padre extends Component{

    state={
        contador:0,
    };

    incrementarContador = (e) =>{
        this.setState({
            contador : this.state.contador + 1
        })
    }

    render(){
        return(
            <div>
                <p>INVENCIBLE</p>
                <h2> CONTADOR <p>{this.state.contador}</p></h2>
                <Hijo incrementarContador={this.incrementarContador} mensaje="Hail Viltromita 01"/>
                <Hijo incrementarContador={this.incrementarContador} mensaje="Hail Viltromita 02"/>
            </div>
        );
    }

}

function Hijo(props){ //Este es un componente HIJO
    return (
    <div>
        <h3>{props.mensaje}</h3>
        <button onClick={props.incrementarContador}>+</button>
    </div>)
}