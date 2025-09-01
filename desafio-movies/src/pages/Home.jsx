import { useState, useEffect} from "react";
import Movie from "./Movie";
import MovieCard from "../components/MovieCard";

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
    const topRatedUrl = `${movieURL}top_rated?${apiKey}`;
    getMelhoresMovies(topRatedUrl)
   }, [])

  return (
     <div className="container">
        <h2 className="title">Melhores Filmes Avaliados</h2>
            <div className="movies-container">
               
                 {topMovies.length > 0 && topMovies.map((movie) =><MovieCard key={movie.id} movie={movie} />)}
            </div>    
      </div>
      )


};  
export default Home;