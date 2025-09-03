import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import '../Filme.css';

const movieURL ='https://api.themoviedb.org/3/movie/'  
const apiKey ='api_key=bf1599df7a9b4670522eee28fed89ffe'    


const Movie = () => {

  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getFilmes = async (url) => { 
    const res = await fetch(url)    
    const data = await res.json()
    setMovie(data)
  }

  useEffect(() => {   
    const movieUrl = `${movieURL}${id}?${apiKey}`;
    getFilmes(movieUrl)
   }, [])

  return <div className="filme-container">

   {movie && <>
    <MovieCard movie={movie} showLink={false}/>
    <p className="tagline">{movie.tagline}</p>
    <div className="info-movie">
      <h3>Orçamento:</h3>
      <p>{movie.budget.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
    </div>
    <div className="info-movie">  
      <h3>Duração</h3>
      <p>{movie.runtime} minutos</p>
      </div>
      <div className="descricao">  
      <h3>Descricão:</h3>
      <p>{movie.overview} </p>
      </div>
   </>}
  </div>
};  
export default Movie;