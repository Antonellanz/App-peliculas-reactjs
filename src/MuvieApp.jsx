
import { useState } from "react"
import "./MuvieApp.css"

function MuvieApp  ()  {
  const[search, setSearch] = useState(``)
  const[moviesList, setMoviesList] = useState(null)
  const urlBase = "https://api.themoviedb.org/3/search/movie"
  const API_KEY = "dfc92968bdb0cc4b8d81d6f6c9de1889"

  const handleInputChange=({target})=>{
    setSearch(target.value)
  }
const handleSubmit=(event)=>{
  event.preventDefault()
  fetchMovies()
}
const fetchMovies = async () =>{
  try {
    const response = await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}&language= es-ES`)
    const data = await response.json()
    setMoviesList(data.results)
    console.log(data.results)
  }catch (error){
    console.error("Ha ocurrido un herror:", error)
  }
}


  return (
    <div className="conteiner">
      <h1 className="title">Anto peliculas</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Escribí una película" 
        value={search}
        onChange={handleInputChange}
        />

        <button className="search-button">Buscar</button>
      </form>
      {moviesList &&
      <div className="movie-list">
        {moviesList.map(movie =>(
          <div key ={movie.id} className="movie-cart">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>

      }
    </div>
  )
}

export default MuvieApp

