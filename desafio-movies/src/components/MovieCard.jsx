import { Link } from "react-router-dom";        

import {FaStar } from "react-icons/fa";

const imageURL = 'https://image.tmdb.org/t/p/w400'

const MovieCard = ({movie, showLink= true,isFavorite, onFavClick }) => {    
    return (
        <div className="movie-card">
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <h3>{movie.title.length > 45
               ? movie.title.slice(0, 45) + '...'
               : movie.title}</h3>
          
            <p>
                <FaStar /> {movie.vote_average}
            </p>
             <label className="favorite-label">
                <input  type="radio" name="favorite" checked={isFavorite} onChange={() => onFavClick(movie)}/>
               Adicionar aos Favoritos
             </label>
            {showLink && <Link to={`/movie/${movie.id}`}>+ Detalhes</Link>}
        </div>
    )
}
export default MovieCard;