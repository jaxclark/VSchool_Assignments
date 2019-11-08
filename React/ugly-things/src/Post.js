import React from 'react'
import Form from './Form'
import {withProvider} from './PostProvider'

class Post extends React.Component {
    constructor(){
        super()
        this.state = {
            toggle: true,
        }
    }

    toggle = () => {
        this.setState(prev => {
            return {toggle: !prev.toggle}
        })
    }

    handleDelete = (e) => {
        this.props.deletePost(this.props.id)
    }

    render() {
        return(
            <div className='postOutside'>
                {this.state.toggle ? 
                <div className='post'>
                    <h1>{this.props.pTitle}</h1>
                    <h4>{this.props.pDescription}</h4>
                    <img src={this.props.pImage} alt={this.props.pImage} />
                    <button onClick={this.toggle}>Edit</button>
                    <button onClick={this.handleDelete}>X</button>
                </div>
                : 
                    <Form button='Save' type='update' toggle={this.toggle} id={this.props.id} title={this.props.title} description={this.props.description} image={this.props.image} post={this.props.info} toggle={this.toggle} />
                }
            </div>
        )
    }
}

export default withProvider(Post)