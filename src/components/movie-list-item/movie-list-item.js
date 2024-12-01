import { Component } from 'react';
import './movie-list-item.css';
class MovieListItem extends Component {
  constructor (props){
    super(props)
    this.state = {favourite: false, like: true }
  }

  favouriteMovie = () => {
    this.setState(({ favourite }) =>({
      favourite: !favourite,
    }))
}


likeItem = () => {
  this.setState(({ like }) =>({
    like: !like
})) 
}

   render() {
      const {name, viewers, deleteItem} = this.props;
      const {favourite, like} = this.state
      return (
  <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}` }>
    <span onClick={this.likeItem} className='list-group-item-label'>{name} </span>
       <input type="number" className='list-group-item-input' defaultValue={viewers} />
    <div>
        <button type='button' className='btn-cookie btn-sm' onClick={this.favouriteMovie}>
            <i className="fas fa-cookie"></i>
        </button>
        <button type='button' className='btn-trash btn-sm' onClick={deleteItem}>
            <i className="fas fa-trash"></i>
        </button>
        <i className='fas fa-star'></i>
    </div>

  </li>

      )
   }
}

// const MovieListItem = ({name, viewers}) => {
//   return (
//   <li className='list-group-item d-flex justify-content-between'>
//     <span className='list-group-item-label'>{name} </span>
//     <input type="number" className='list-group-item-input' defaultValue={viewers} />
//     <div>
//         <button type='button' className='btn-cookie btn-sm'>
//             <i className="fas fa-cookie"></i>
//         </button>
//         <button type='button' className='btn-trash btn-sm'>
//             <i className="fas fa-trash"></i>
//         </button>
//         <i className='fas fa-star'></i>
//     </div>

//   </li>
//   )
// }

export default MovieListItem