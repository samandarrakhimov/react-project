import { useContext } from 'react'
import './AppInfo.css'
import { Context } from '../Context/data'

const AppInfo = ({allMovieCount,favoriteCount}) => {
  const {state,dispatch} = useContext(Context)

  return (
    <div className="app-info">
      <p className='fs-3 text-uppercase'>Barcha Kinolar: {state.data.length}</p>
      <p className='fs-4 text-uppercase'>ko'rilgan kinolar: {state.data.filter(c => c.favorite).length}</p>
    </div>
  )
}

export default AppInfo