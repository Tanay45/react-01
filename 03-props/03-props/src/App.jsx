import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <div className="parent">
        <Card user="Virat Kohli" age={38} img="https://m.media-amazon.com/images/I/71SBx4KV2IL._AC_UF894,1000_QL80_.jpg" />
        <Card user="Rohit Sharma" age={39} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbCgiaiHaSgdHTxkaZqKumAAWYE5ti0djqWfp-Gj_sD6qWvvBrrUPhtrk&s=10" />
      </div>
    </div>
  )
}

export default App
