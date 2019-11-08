import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

export default class PostProvider extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
        }
    }

    addPost = (newPost) => {
        this.setState(prev => {
            return {posts: [...prev.posts, newPost]}
        })
    }
    
    deletePost = (id) => {
        this.setState(prev => {
            return{posts: prev.posts.filter(p => p.id !== id)}
        })
    }

    editPost = (post, id) => {
        this.setState(prev => {
            const copyPrevPost = [...prev.posts]
            console.log(id)
            const index = copyPrevPost.findIndex(post => post.id === id)
            copyPrevPost.splice(index, 1, post)
            return {posts: copyPrevPost}

        })
    }

    render(){
        return(
            <Provider value={{...this.state, addPost: this.addPost, deletePost: this.deletePost, editPost: this.editPost}}>{this.props.children}</Provider>
        )
    }
}

export function withProvider(Comp) {
    return props => <Consumer>{value => <Comp {...value}{...props} />}</Consumer>
}