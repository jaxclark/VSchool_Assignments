import React, {Component} from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

export default class BountyProvider extends Component {
    constructor() {
        super()
        this.state = {
            bounties: [],
        }
    }

    componentDidMount() {
        this.handleGet()
    }

    handleGet = () => {
        axios.get('/bounty').then(res => {
            this.setState({bounties: res.data})
          })
    }

    handlePost = (bounty) => {
        axios.post('/bounty', bounty).then(res => {
            this.setState(prev => {
            return {bounties: [...prev.bounties, res.data]}
            })
        })
    }

    handleDelete = (id) => {
        axios.delete('/bounty/' + id).then(res => {
            this.setState(prev => {
                // debugger
                const filteredBounties = prev.bounties.filter(bounty => bounty._id !== id)
                return { bounties: filteredBounties }
            })
        })
    }

    handlePut = (update, id) => {
        axios.put('/bounty/' + id, update).then(res => {
            this.setState({ bounties: res.data })
        })
    }
    // const bounties = prev.bounties
    // const index = bounties.findIndex(bounty => bounty._id === id)
    // bounties[index] = res.data[index] //this was working

    // debugger
    // const changedBounty = prev.bounties.map(bounty => bounty._id === id ? bounties : bounty)
    // console.log(changedBounty)

    render() {
        console.log('bounties:', this.state.bounties)
        return(
            <Provider value={{
                ...this.state, 
                handlePost: this.handlePost, 
                handleDelete: this.handleDelete, 
                handlePut: this.handlePut, 
                handleGet: this.handleGet}}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withBounty = Comp => props => (
    <Consumer>
        {value => <Comp {...value} {...props} />}
        </Consumer>
)