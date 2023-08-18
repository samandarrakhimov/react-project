import { Component, useContext, useState } from 'react'
import './SearchPanel.css'
import { Context } from '../Context/data'

const SearchPanel =() => {
 const [term, setTerm] = useState('')
 const {state, dispatch} = useContext(Context)
 const updateTermHandler = e => {
  let term = e.target.value
  setTerm(term)
  dispatch({type:'ON_TERM',payload:term})
  
 }
 return (
        <div  className="search-panel">
          <input type="text" placeholder='Kinolarni Qidiring' className='form-control' onChange={updateTermHandler} value={term}/>
        </div>
      )
}
// class SearchPanel extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       term:'',
//     }
//   }
//   updateTermHandler = (e) => {
//     let term = e.target.value
//     this.setState({term})
//     this.props. updateTermHandler(term)
//   }
//   render(){
//     return (
//       <div  className="search-panel">
//         <input type="text" placeholder='Kinolarni Qidiring' className='form-control' onChange={this.updateTermHandler} value={this.state.term}/>
//       </div>
//     )
//   }
  
// }

export default SearchPanel