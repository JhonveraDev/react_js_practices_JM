import React,{Component} from 'react';

class Reloj extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <h3>{this.props.hora}</h3>
        )
    }

    componentWillUnmount(){//Se Revela cuando el componente ha sido eliminado
        console.log(3,'El Componente ha sido Eliminado del DOM')
    }
}


export default class VidaComponente extends Component{

    constructor(props){
        super(props)
        console.log(0,'El Componente se Inicializa, aun no esta en el DOM')

        this.state = {
            hora:new Date().toLocaleTimeString(),
            visible:false,
        }

        this.temporizador=null;
    }

    componentDidMount(){
        console.log(1,'El Componente ya se encuentra en el DOM')
    }

    componentDidUpdate(prevProps,prevState){
        console.log(prevProps)
        console.log(prevState)
        console.log(2,'El Estado o las props del componente han cambiado')
    }

    tictac = ()=>{
        this.temporizador = setInterval(()=>{
            this.setState({
                hora:new Date().toLocaleTimeString()
            })
        },1000)
    }

    iniciar = (e)=>{
        this.tictac();
        this.setState({
            visible:true,
        })
    }

    detener = (e)=>{
        clearInterval(this.temporizador); 
        this.setState({
            visible:false,
        })   
    }

    render(){
        console.log(4,'Componente se Dibuja')
        return(
            <div>
                <h2>Ciclo de Vida de los componentes de React JS</h2>
                {this.state.visible?<Reloj hora={this.state.hora}/>:<p>No Hay Horas</p>}
                <button onClick={this.iniciar}>INICIAR</button>
                <button onClick={this.detener}>DETENER</button>
            </div>
        )
    }
}