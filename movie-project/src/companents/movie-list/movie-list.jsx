import { useContext } from 'react';
import  MovieListItem from '../movie-list-item/movieListItem'
import { Context } from '../Context/data';

import './movie-list.css'


const MovieList = ({onDelete,onToglleProp}) => {
  const searchHandler = (arr,term) => {
    if (term === 0) {
      return arr
    } 
    return arr.filter(c => c.name.indexOf(term) > -1)
  }

const filterHandler = (arr,filter) => {
    switch (filter) {
      case 'popular':
        return arr.filter(c => c.like)
        case 'mostviewrs':
        return arr.filter(c => c.viewrs > 400)
      default:
        return arr
    }
  }
  const  {state, dispatch } = useContext(Context)
  const data = filterHandler(searchHandler(state.data, state.term),state.filter)
  console.log(state);
  return (
      <ul className='list-group'>
        { data.map(item => (
          <MovieListItem key={item.id}
           {...item}
           id={item.id}
            />
        ))}
         
      </ul>
  )
}

export default MovieList