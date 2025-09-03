import { useState, useEffect} from "react";
import Movie from "./Movie";
import MovieCard from "../components/MovieCard";
import '../ConteinerFilme.css';

const movieURL ='https://api.themoviedb.org/3/movie/'
const apiKey ='api_key=bf1599df7a9b4670522eee28fed89ffe'    

const Home = () => {

 const [topMovies, setTopMovies] = useState([])
 const [favFilmes, setFavFilmes] = useState([])
 const [errorMessage, setErrorMessage] = useState("")
 const [page , setPage] = useState(1)

 const getMelhoresMovies = async (page = 1) => {     

   try {


     const url=`${movieURL}top_rated?${apiKey}&page=${page}`;
       const res = await fetch(url)    

         if(!res.ok){
            throw new Error("Erro ao buscar os filmes")
         }
         const data = await res.json()
         setTopMovies(data.results)
   } catch (error) {
       console.error("Erro ao buscar filmes:", error)
       setTopMovies([]) 
   }
   
    

 }
    useEffect(() => {   
     
   
    getMelhoresMovies(page)
   }, [page])

   const addFav = (movie) => {
     setFavFilmes((preFav)=>{
      if(preFav.some(fav => fav.id === movie.id)){
         return preFav.filter(fav => fav.id !== movie.id)
      }else{
         return [...preFav, movie];
      }
     })
     
   };
  return (
     <div className="container">
        <h2 className="title">Melhores Filmes Avaliados</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
            <div className="movie-container-card">
               
                 {topMovies.length > 0 && topMovies.map((movie) =><MovieCard 
                                                                  key={movie.id}
                                                                   movie={movie}
                                                                   onFavClick = {() => addFav(movie)}
                                                                   isFavorite={favFilmes.some(fav => fav.id === movie.id)} />
                                                                   
                                                                   )}
            </div>    

             <h2 className="title">Filmes Favoritos</h2>
         <div className="movie-container-card">
               {favFilmes.length > 0 ? (
                  favFilmes.map((movie) => (
                           <MovieCard 
                           key={movie.id} 
                           movie={movie} 
                           onFavClick={() => addFav(movie)}
                           isFavorite={true}  />
                  ))) : (
               <p>Você ainda não tem filmes favoritos.</p>
            )}
      </div>
      <div className="pagination">
         <button 
            disabled={page === 1} 
            onClick={() => setPage(page - 1)}>
               Anterior
         </button>

         <span>Página {page}</span>

         <button onClick={() => setPage(page + 1)}>
            Próxima
         </button>
    </div>
      </div>
      )


};  
export default Home;