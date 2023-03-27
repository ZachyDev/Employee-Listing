import React from 'react'

function BlogList({ blogList, author }) {
    return (
        <div>
            <h1>Author: {author}</h1>
            {blogList.map(blog => {
                return (
                    <div key={blog.id} className='blogList'>
                        <h3>Title: {blog.title}</h3>
                        <i>Author: {blog.author}</i>
                        <p>Description: {blog.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogList