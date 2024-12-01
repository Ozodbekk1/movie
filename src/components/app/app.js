import './app.css';
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';

const App = () => {
   const data = [
      {name: 'John', viewers: 532, id: 1},
      {name: 'Alice', viewers: 344 , id: 2},
      {name: 'Bob', viewers: 544, id: 3},
   ]
    return (
        <div className='app font-monospace '>
           <div className='content'>
              <AppInfo />
              <div className='search-panel'>
              <SearchPanel />
              <AppFilter />
            </div>
              <MovieList data={data} />
              <MoviesAddForm />
           </div>
        </div>
        
        )
}

export default App;