import { useContext, useReducer } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid'
const initailvalue = {
    data:[],
    filter:'all',
    term:'',
}

export const Context = createContext()
const reducer = (state = initailvalue,action) => {
    const {type,payload} = action
    switch (type) {

        case "GET_DATA":
          return {...state, data:payload}
        case 'ON_DELETE':
            const deleteArr = state.data.filter(c => c.id !== payload)
           return {...state, data:deleteArr}
           case 'ON_TOOGLE': 
           const {id, prop} = payload
           const onToglleArr = state.data.map(item => {
            if (item.id === id) {
              return {...item,[prop] : !item[prop]}
        
            }
            return item
           })
           return {...state,data:onToglleArr}
          case "ADDFORM":
            const {name,viewrs} = payload
            const  addformArr = {name, viewrs, id: uuidv4(), like:false, favorite:false}
                
                return{...state,data:[...state.data,addformArr]}
              
           case "ON_TERM":
            return {...state,term:payload}
            case "ON_FILTER":
                return {...state,filter:payload}
        default:
            return {...state}
    }
}
const Provider = ({children}) => {
    const [ state, dispatch]  = useReducer(reducer,initailvalue)
   return <Context.Provider value={{state,dispatch}}>{children}</Context.Provider>
}

export default Provider