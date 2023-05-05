import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_Url ='http://www.omdbapi.com?apikey=801338cb'

const App = () => {

  //  function to fetch data of movies
  //  (async functin means it takes some time to fetch data) 
  const [movies,setMovies]=useState([]); 
  const [searchTerm,setSearchTerm]= useState('');
  const searchMovies =async(title) =>{
        const response = await fetch(`${API_Url}&s=${title}`);
       
        const data = await response.json();
        console.log(data);
        setMovies(data.Search);
    }  

    useEffect(()=>{searchMovies('Superman');},[]);

    return(
       <div className='App'>
            <h1>MovieLand </h1>

            <div className='search'>
                <input placeholder='Search for movie moda-faka' 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />  
                <img src={SearchIcon} 
                  alt="search"
                  onClick={()=>searchMovies(searchTerm)}/>
            </div>
            
            {
            movies?.length > 0
                ? (
                    <div className='container'>
                    {movies.map((movie)=>(
                        <MovieCard movie={movie }/>
                    ))}
                    </div>
                ):(
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
       </div>
    );
}
export default App;

{/* <div className='movie'>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !='N/A' ? movie1.Poster :'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h1>{movie1.Title}</h1>
                    </div>
                </div>  */}