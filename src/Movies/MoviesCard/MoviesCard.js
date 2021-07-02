import React from 'react';
import './MoviesCard.scss';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';


const MoviesCard = ({ title, path, rating, overview }) => {

    function getClassByRate(vote) {
        if (vote >= 8) {
            return 'green';
        }
        else if (vote >= 5) {
            return 'orange';
        }
        else {
            return 'red'
        }
    }

    return (
        <div className="movie">
            <img src={IMG_PATH + path} alt={title}/>
                <div class="movie-info">
                    <h3>{title}</h3>
                    <span class={getClassByRate(rating)}>{rating}</span>
                </div>
                <div class="overview">
                    <h3>OverView</h3>
                    {overview}
                </div>

        </div>
    );
}



export default MoviesCard;


