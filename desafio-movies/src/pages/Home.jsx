import { useState, useEffect} from "react";
import Movie from "./Movie";
import MovieCard from "../components/MovieCard";
import '../ConteinerFilme.css';

const movieURL ='https://api.themoviedb.org/3/movie/'  
const apiKey ='api_key=bf1599df7a9b4670522eee28fed89ffe'    

const Home = () => {

 const [topMovies, setTopMovies] = useState([])

 const getMelhoresMovies = async (url) => {     

    const res = await fetch(url)    
    const data = await res.json()
    setTopMovies(data.results)
 }
    useEffect(() => {   
      /**
       * Melhores filmes avaliados
       * top_rated esta relacionaddo com os melhores filmes avaliados
       */
    const topRatedUrl = `${movieURL}top_rated?${apiKey}`;
    getMelhoresMovies(topRatedUrl)
   }, [])

  return (
     <div className="container">
        <h2 className="title">Melhores Filmes Avaliados</h2>
            <div className="movie-container-card">
               
                 {topMovies.length > 0 && topMovies.map((movie) =><MovieCard key={movie.id} movie={movie} />)}
            </div>    
      </div>
      )


};  
export default Home;