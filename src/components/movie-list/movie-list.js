import './movie-list.css';
import MovieListItem from '../movie-list-item/movie-list-item';

const MovieList = ({data}) => {
  return (
    <ul className="movie-list">
     {data.map(item => (
      <MovieListItem key={item.id} name={item.name} viewers={item.viewers} like={item.like} deleteItem={() => console.log('Deleted ' + item.id)
      } />
     ))}
    </ul>
  )
}

export default MovieList

