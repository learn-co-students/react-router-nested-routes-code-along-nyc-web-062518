import React from 'react'
import { Link } from 'react-router-dom'

const MoviesList = ({movies}) => {
  const renderMovies = Object.keys(movies).map(movieId => <React.Fragment key={movieId}><Link to={`/movies/${movieId}`}>{movies[movieId].title}</Link><br/></React.Fragment>)

  return (
    <div>{renderMovies}</div>
  )
}

export default MoviesList
