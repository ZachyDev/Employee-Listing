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
    return (
        <div>
            <BlogList blogList={blogs} />
        </div>
    )
}

export default BlogData