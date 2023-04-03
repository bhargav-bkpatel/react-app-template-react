import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import BlogPost from './views/blog-post/index'
import Home from './views/home/index'
import Profile from './views/profile/index'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Profile} path="/profile" />
        <Route exact component={Home} path="/" />
        <Route exact component={BlogPost} path="/blog-post" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
