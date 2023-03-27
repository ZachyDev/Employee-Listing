import React from 'react'

function AppHeader({title,course}) {
  return (
    <div>
        <h1>{title}</h1>
        <h4>Course: {course}</h4>
    </div>
  )
}

export default AppHeader