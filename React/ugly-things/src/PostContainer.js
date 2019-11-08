import React from 'react'
import Post from './Post'
import { withProvider } from './PostProvider'

const PostContainer = (props) => {
    const mappedPosts = props.posts.map((data, i) => <Post key={data.title + i} info={data} id={data.id} pTitle={data.title} pDescription={data.description} pImage={data.image}
    />)
    return(
        <div className='container'>
            {mappedPosts}
        </div>
    )
}

export default withProvider(PostContainer)