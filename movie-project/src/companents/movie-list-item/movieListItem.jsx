
import { useContext } from 'react'
import './movieListItem.css'
import { Context } from '../Context/data'
const MovieListItem = (props) => {
  const {name,viewrs,favorite,like,id} = props

  const {state,dispatch} = useContext(Context)
 
  const onDelete = () => {
    dispatch({type:'ON_DELETE',payload:id})
  }

  const onToglleProp = e => {
   const payload ={
    id,
    prop:e.currentTarget.getAttribute('data-toggle'),
   }
   dispatch({type:'ON_TOOGLE',payload})
  }
  return (
    <div>
      <li className={`list-group-item d-flex justify-content-between align-items-center ${favorite && 'favorite'} ${like && 'like'}`}>
        <span
       onClick={onToglleProp} 
        className="list-group-item-label" 
         data-toggle="like"
          >{name}
          </span>
        <input type="number" 
        className="list-group-item-input"
         defaultValue={viewrs} />
        <div className='d-flex justify-content-center align-items-center'>
          <button onClick={onToglleProp} className="btn-cookie btn-sm" 
          data-toggle="favorite">
          <i class="fa-solid fa-regular fa-cookie"></i>
          </button>
          <button className="btn-trash btn-sm" onClick={onDelete}>
          <i class="fa-solid fa-regular fa-trash"></i>
          </button>
          <i class="fa-solid fa-regular fa-star"></i>
        </div>
      </li>
    </div>
  )
}

export default MovieListItem