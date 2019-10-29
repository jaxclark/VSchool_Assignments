import React from 'react'
import Blogpost from './Blogpost'
import postInfo from './blogposts.json'

const Bloglist = () => {
    const mappedPosts = postInfo.map(((post, i) => <Blogpost key={i + post.title}
                                                                title={post.title}
                                                                subTitle={post.subTitle}
                                                                author={post.author}
                                                                date={post.date}
                                                                />))
    return(
        <div>
            {mappedPosts}
        </div>
    )
}

export default Bloglist