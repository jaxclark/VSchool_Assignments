import React from 'react'
import {withProvider} from './PostProvider'
import Form from './Form'
import PostContainer from './PostContainer'

function App() {
  return (
    <div className="app">
      <Form button='Submit' type='add'/>
      <PostContainer />
    </div>
  )
}

export default withProvider(App)