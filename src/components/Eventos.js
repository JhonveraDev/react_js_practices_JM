import React,{Component} from 'react';

export class Eventos extends Component{
    constructor(props){
        super(props)

        this.state={
            contador:0,
        }

        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar(){
       this.setState({
           contador:this.state.contador+1
       })
    }

    restar(){
        this.setState({
            contador:this.state.contador-1
        })
     }

    render(){
        return(
            <div>
                <p>Hola Envetos</p>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}

//Properties initializer
export class EventosES7 extends Component{

    state={
        contador:0,
    }

    //Arrow Functions
    sumar =(e)=>{
       this.setState({
           contador:this.state.contador+1
       })
    }

    restar=(e)=>{
        this.setState({
            contador:this.state.contador-1
        })
     }

    render(){
        return(
            <div>
                <p>Hola Envetos</p>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}

function Boton(props) {
    return(<button onClick={props.MyOnClick}>Boton pasado por Funcion y Componente</button>)   
}

export class MoreEvents extends Component{
    
    handleClick = (e,mensaje)=>{
        console.log(e);
        console.log(e.target)
        console.log(e.nativeEvent)
        console.log(mensaje)
    }

    render(){
        return(
            <div>
                <p>More Events</p>
                <button onClick={(e)=>this.handleClick(e,'PASANDO DATA POR MEDIO DE BIND')}>Saludar</button>
                {/* <Boton onClick={(e)=>this.handleClick(e,'asdasd')} /> */}
                <Boton MyOnClick={(e)=>this.handleClick(e,'Pasando Data desde un boton - evento personalizado')} />
            </div>
        )
    }

}