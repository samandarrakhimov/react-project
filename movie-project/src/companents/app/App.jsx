import './App.css'
import AppInfo from "../app-info/AppInfo"
import SearchPanel from '../search-panel/SearchPanel'
import AppFilter from '../app-filter/AppFilter'
import MovieList from '../movie-list/movie-list'
import MovieAddForm from '../movie-addForm/movieAddForm'
import { Component, useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Context } from '../Context/data'
 const App = () => {
 const {state, dispatch} = useContext(Context)

 const [data, setData] = useState([])
 const [isLoading, setIsLoading] = useState(false)
const [term, setTerm] = useState('')
const [filter, setFilter] = useState('all')





const addForm = (item) => {
  setIsLoading(true)
  const newItem = {name: item.name, viewrs: item.viewrs, id: uuidv4(), like:false, favorite:false}
  const newArr = [...data,newItem]
  setData(newArr)
}

const updateFilterHandler = (filter) => {
  setFilter(filter)
}
const updateTermHandler = (term) => {
  setTerm(term)
}
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
      .then(response => response.json())
      .then(json => {
         setIsLoading(true)
        const newArr = json.map(item => ({
         id: item.id,
         viewrs: item.id *100,
         name: item.title,
         like:false,
         favorite:false,
         
        })
        )
        setData(newArr)
        dispatch({type:'GET_DATA',payload:newArr})
        
      }).finally(
        setIsLoading(false)
      )
      
},[])
return (
  <div className="box">
    <div className="content">
      <AppInfo/>
      <div className='search-panel'>
       <SearchPanel />
       <AppFilter />
      </div>
      {isLoading ? <MovieList/>: <div  className='text-center fs-1'>
        Loading...
      </div> }
     
      <MovieAddForm/>
    </div>
    </div>
    )
      }
 

// class App extends Component {
// constructor(props){
//   super(props)
//   this.state = {
//     data : [
//       {
//         name:'omar',
//         viewrs:511,
//         id:1,
//         favorite:false,
//         like:false,
//       },
//       {
//         name:'Ertugrul',
//         viewrs:611,
//         id:2,
//         favorite:false,
//         like:false,
//       },
//       {
//         name:'Empire of osman',
//         viewrs:711,
//         id:3,
//         favorite:true,
//         like:true,
//       },
//     ],
//     term:'',
//     filter:'',
//   }
// }
// onDelete = id => {
//   this.setState(({data}) => ({
//     data : data.filter(c => c.id !== id)
//   }))
// }
// addForm = (item) => {
//   const newItem = {name:item.name, viewrs:item.viewrs,id:uuidv4(), like:false, favorite:false }
//  this.setState(({data}) => ({
//   data : [...data,newItem],
  
//  }))}
//  onToglleProp = (id,prop) => {
//    this.setState(({data}) => ({
//     data: data.map(item => {
//       if (item.id === id) {
//         return {...item,[prop] : !item[prop]}
//       }
//       return item
//     }
//    )
//    }))
//  }
//  searchHandler= (arr, term) => {
//    if (term.length == 0) {
//     return arr
//    }
//    return arr.filter(c => c.name.indexOf(term) > -1)
//  }
//  filterHandler= (arr, filter) => {
//   switch (filter) {
//     case 'popular':
//       return arr.filter(c => c.like)
//       case 'mostviewers':
//         return arr.filter(c => c.viewrs > 500)
//     default:
//       return arr
//   }
// }
//  updateTermHandler = (term) => {
//   this.setState({term})
//  }
//  updateFilterHandler = (filter) => {
//   this.setState({filter})
//  }
//   render(){
//     const {data,term,filter}= this.state
//     const allMovieCount = data.length
//     const favoriteCount = data.filter(c => c.favorite).length
//     const visableData = this.filterHandler(this.searchHandler(data, term),filter) 
//     return (
//       <div className="box">
//         <div className="content">
//           <AppInfo allMovieCount= {allMovieCount} favoriteCount={favoriteCount}/>
//           <div className='search-panel'>
//            <SearchPanel updateTermHandler={this.updateTermHandler}/>
//            <AppFilter updateFilterHandler={this.updateFilterHandler}/>
//           </div>
//           <MovieList data= {visableData} onDelete={this.onDelete} onToglleProp={this.onToglleProp} />
//           <MovieAddForm addForm={this.addForm}/>
//         </div>
//       </div>)
//   }
// }

export default App


