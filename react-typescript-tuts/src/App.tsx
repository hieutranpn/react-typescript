import React, { useState } from 'react';
import Form from './components/form';
import List from './components/List';
import "./App.css"

export interface IState{
  people:{
    name:string,
    age:number,
    bio:string
  }[]
}

export default function App(){
  /**const [age, setAge] = useState(5);
  const [name, setName] = useState("hihi")
  const [inputData, setInputData] = useState({name:"", age:""})
  const [size, setSize] = useState<string | number>("XL");
  */
  const [people, setPeople] = useState<IState["people"]>([{name:"hihi",age:21,bio:"koko"}])
  return(
    <div className='container'>
      <Form people={people} setPeople={setPeople}/>
      <List people={people} />
    </div>
  )
}