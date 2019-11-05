import React, { PureComponent } from 'react'

class Todo extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
               <h1>{this.props.title}</h1> 
            </div>
        )
    }
}

export default Todo