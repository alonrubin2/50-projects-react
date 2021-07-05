import React, { useState, useEffect } from 'react';
import './Movies.scss';
import MovieCard from './MoviesCard/MoviesCard';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4b4febe00b63479fbf9dd75ca717b90a&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=4b4febe00b63479fbf9dd75ca717b90a&query=';

const Movies = () => {

    const [movies, setMovies] = useState([])
    const [value, setValue] = useState('');

    async function getMovies(url) {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    }

    useEffect(() => {
        getMovies(API_URL);
    }, []);
    console.log(value)

    function handleSubmit(e) {
        e.preventDefault();
        const searchTerm = value;

        if (searchTerm && searchTerm !== '') {
            getMovies(SEARCH_API + searchTerm);
            setValue('');
        }

    }


    return (
        <div className="movies-contianer">
            <div className="header-container">
                <header className="movie-header">
                    <form className="movie-form" onSubmit={(e) => handleSubmit(e)}>
                        <input onChange={(e) => setValue(e.target.value)} type="text" value={value} className="search" placeholder="Search" />
                    </form>
                </header>
            </div>
            <div className='Movies'>
                {movies.map((movie, index) => {
                    return <MovieCard path={movie.poster_path} title={movie.title} rating={movie.vote_average} overview={movie.overview} />
                })}
            </div>
        </div>
    );
}

export default Movies;
