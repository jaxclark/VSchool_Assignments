import React from 'react'

const Blogpost = (props) => {
    let {title, subTitle, author, date} = props
    return(
        <div>
            <h1>{title}</h1>
            <h1>{subTitle}</h1>
            <h1>Posted by {author}</h1>
            <h1>on {date}</h1>
        </div>
    )
}

export default Blogpost