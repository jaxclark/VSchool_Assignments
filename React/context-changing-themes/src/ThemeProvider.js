import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

export default class ThemeProvider extends Component {
    constructor(){
        super()
        this.state = {
            on: true,
            theme: 'dark',
        }
    }

    toggle = () => {
        this.setState(prev => {
            if(this.state.on === false){
                this.setState({theme: 'dark'})
            } else {
                this.setState({theme: 'light'})
            }
            return{
                on: !prev.on
            }
        })
    }

    render(){
        return(
            <Provider value={{...this.state, toggle: this.toggle,}}>
                {this.props.children}
            </Provider>
        )
    }
}

export function withProvider(Comp) {
    return props => <Consumer>{value => <Comp {...value}{...props} />}</Consumer>
}