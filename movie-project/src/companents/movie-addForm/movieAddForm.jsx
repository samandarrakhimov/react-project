import {Component, useContext, useState} from 'react'
import './movieAddForm.css'
import { Context } from '../Context/data'

const MovieAddForm = () => {
  const [state, setState] = useState({name:'',viewrs:''})

  const changeHandler = (e) => {
    setState({...state,  [e.target.name] :e.target.value} )
  }
  const {_,dispatch} = useContext(Context)
  const addFormHandler =(e) => {
   e.preventDefault()
   const data = {name: state.name, viewrs: state.viewrs,}
   dispatch({type:'ADDFORM',payload:data})
   setState({name:'',viewrs:''})
  }

  return (
    <div className=" movie-addForm">
      <h2 className='fs-3 mb-4'>Kino Qo'shish</h2>
      <form className='form d-flex justify-content-between w-100%' onSubmit={addFormHandler}>
      <input type="text" placeholder="Kino qo'shish" className="form-control" onChange={changeHandler} name='name' value={state.name}/>
      <input type="number" placeholder="necha marotaba ko'rilgan" className="form-control" onChange={changeHandler} name='viewrs' value={state.viewrs}/>
      <button type='submit' className="btn btn-outline-dark">Qo'shish</button>
      </form>
    </div>
  )
}


// class MovieAddForm extends Component  {
//   constructor(props){
//     super(props);
//     this.state = {  
//     name :'',
//     viewrs :''
//   }
//   }

//   changeHandler = e => {
//     this.setState({
//     [e.target.name]:e.target.value
//     })
//   }
//   addFormHandler = e => {
//     e.preventDefault()
//     this.props.addForm({name: this.state.name, viewrs: this.state.viewrs, })
//     this.setState({
//       name:'',
//       viewrs:'',
//     })
//   }
//   render(){
//     const {name,viewrs} =this.state
//     return (
//       <div className=" movie-addForm">
//         <h2 className='fs-3 mb-4'>Kino Qo'shish</h2>
//         <form className='form d-flex justify-content-between w-100%' onSubmit={this.addFormHandler}>
//         <input type="text" placeholder="Kino qo'shish" className="form-control" onChange={this.changeHandler} name='name' value={name}/>
//         <input type="number" placeholder="necha marotaba ko'rilgan" className="form-control" onChange={this.changeHandler} name='viewrs' value={viewrs}/>
//         <button type='submit' className="btn btn-outline-dark">Qo'shish</button>
//         </form>
//       </div>
//     )
//   }
  
// }

export default MovieAddForm