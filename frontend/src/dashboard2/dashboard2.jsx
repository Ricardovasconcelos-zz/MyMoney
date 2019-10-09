import React,{Component} from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Box from '../common/widget/box'
import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export default class dashboard2 extends Component{   
    constructor(props){
        super(props)
        this.state={ credit: 0, debt: 0 }
    }
   

    componentDidMount(){
        axios.get(`${BASE_URL}/billingCycles/summary`)
        .then(response => this.setState(response.data))
    }



render(){
    const {credit, debt } = this.state
    return (
        <div>
            <ContentHeader title='Dashboard' small='Versão 1.0'/>
            <Content>
                <Box cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} 
                text='Total de Créditos'/>
                <Box cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} 
                text='Total de Débitos' />
                <Box cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} 
                text="Valor Consolidado"/>
            </Content>
        </div>
    )
}
        
}

