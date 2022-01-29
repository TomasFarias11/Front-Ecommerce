import React from 'react';
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";

function AddCategory() {


  const dispatch = useDispatch()
  const [inputBody , setInputBody] = useState({
    name:"",
  })

  function handelInput(e){
    e.preventDefault()
    setInputBody({
      ...inputBody,
      [e.target.name]:e.target.value
    })

  }

   function handelSubmit(e){
    e.preventDefault()
    alert("producto agregado a la db")
    setInputBody({
    name:""
    })
  }

  return<div className="row ">
    <div className="container d-flex justify-content-center">
    <div className=" card col-lg-8">
    <br/>
    <h1>Agregar Categoria</h1>
    <br/>
      <form onSubmit={e=>handelSubmit(e)}>
        <div class="form-group">
          <label for="exampleInputName">Nombre de la nueva Categoria</label>
          <input name="name" value={inputBody.name} onChange={e=>handelInput(e)} type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Ingrese el nombre"/>
        </div>
        <button class="btn btn-primary" type="submit" style={{marginTop:10, marginBottom:10}}>Agregar Categoria</button>
      </form>
    </div>
  </div>
  </div>;
}

export default AddCategory;