  import { useEffect, useState } from "react";  
  import { useSearchParams } from "react-router-dom";
  import MovieCard from "../components/MovieCard";
  import '../ConteinerFilme.css';
  const urlSearch=`https://api.themoviedb.org/3/search/movie`
  const apiKey ='api_key=bf1599df7a9b4670522eee28fed89ffe'    


const Search = () => {
  const [searchParams] = useSearchParams();
  const [fimes, setTMovies] = useState([])
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);


  const query = searchParams.get("q");

   const getBuscaFilmes = async (url) => {     
  
      try {
        setLoading(true);
        setError(null); 

        const res = await fetch(url)    
        if(!res.ok) throw new Error("Erro ao buscar filmes")
             const data = await res.json()
             setTMovies(data.results)
        
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        setError("Não foi possível carregar os filmes. Tente novamente.");
      }finally{
         setLoading(false);
      }

             


   }
      useEffect(() => {   
       const buscaURL = `${urlSearch}?${apiKey}&query=${query}`;
      getBuscaFilmes(buscaURL)
     }, [query])


return (
     <div className="container">
        <h2 className="title">Mostrando opções para :<span className="query-text">{query}</span></h2>
            <div className="movie-container-card">
               
                 {fimes.length > 0 && fimes.map((movie) =><MovieCard key={movie.id} movie={movie} />)}
            </div>    
      </div>
      )

};  
export default Search;