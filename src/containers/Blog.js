import React, { Component } from 'react'
import './Blog.css'

class Blog extends Component {


    render() {
        return(
            <div className="blog-page">
                <h1 className="page-header" > Blog </h1>
                <p>At some point I may move all my blog posts to this site.
                    Until then, read it <a id="blog-link" href="https://medium.com/@morganpstanley">here.</a>
                </p>
            </div>
        )
    }
}

export default Blog