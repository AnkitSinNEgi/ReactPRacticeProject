import logo from './logo.svg';
import './App.css';

<<<<<<< HEAD
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
=======
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> parent of fb31f66 (First-app-react)
}

export default App;
