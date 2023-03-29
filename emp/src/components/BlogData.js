import React, { useState } from 'react'
import BlogList from './BlogList'

function BlogData() {
    const [blogs, setBlogs] = useState([
        { 'id': '1', 'title': 'Angular', 'desc': 'this content described about angular', 'author': 'jhon' },
        { 'id': '2', 'title': 'reactjs', 'desc': 'this content described about reactjs', 'author': 'rishan' },
        { 'id': '3', 'title': 'dot net core', 'desc': 'this content described about dot net core', 'author': 'jhon' },
        { 'id': '4', 'title': 'jQuery', 'desc': 'this content described about jQuery', 'author': 'rishan' },
        { 'id': '5', 'title': 'sql', 'desc': 'this content described about Sql', 'author': 'rishan' }
    ])
    // delete blog fn
    const DeleteFn = id => {
        const newBlogList = blogs.filter(blog=> blog.id != id);
        setBlogs(newBlogList);
    }
    
    
    return (
        <div>
            <BlogList blogList={blogs.filter(item => item.author === 'rishan')} author="Author is Rishan" DeleteFn={DeleteFn} />
            <BlogList blogList={blogs.filter(item => item.author === 'jhon')} author="Author is Jhon" DeleteFn={DeleteFn} />
        </div>
    )
}

export default BlogData