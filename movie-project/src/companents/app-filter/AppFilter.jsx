
import { useContext } from 'react'
import './AppFilter.css'
import { Context } from '../Context/data'

const AppFilter = () => {
  const {state,dispatch} = useContext(Context)
    return (
      <div className='btn-group'>
        {filtersButton.map( btn => (
    <button type='button' key={btn.name}  className='btn btn-outline-dark' onClick={() => dispatch({type:'ON_FILTER',payload:btn.name}) }>
      {btn.title}
    </button>
  ))}
       {/* <button className='btn btn-outline-dark'>Barch Kinolar</button>
       <button className='btn btn-outline-dark'>Mashhur Kinolar</button>
       <button className='btn btn-outline-dark'>Eng ko'p ko'rilgan Kinolar</button> */}
      </div>
    
  )
  }
 const filtersButton = [
  {
    name:'all',
    title:'Barch Kinolar',
  },
  {
    name:'popular',
    title:'Mashhur Kinolar',
  },
  {
    name:'mostviewrs',
    title:"Eng ko'p ko'rilgan Kinolar",
  }
 ]

export default AppFilter