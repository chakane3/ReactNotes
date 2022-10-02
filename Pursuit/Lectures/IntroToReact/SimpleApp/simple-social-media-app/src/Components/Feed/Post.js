import React from "react"

const postInfo = {
    title: "Sample Post Title", 
    imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
    description: "Here is a sample description for this post."
}

const Post = () => {
    return ( 
        <div>
            <p>{postInfo.title}</p>
            <img src={postInfo.imageLink} alt="post" width="200" height="200"></img>
            <p>{postInfo.description}</p>
        </div>
    )
}

export default Post