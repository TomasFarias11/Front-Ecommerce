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

  return(<div className="row">
    <div className="col-lg-3">
        <div className="container-sm" style={{ padding: 20 } }>   
            <div >
                <div className="dropdown">
                <Link to="/admin/Category">
                <button type="button" class="btn btn-outline-secondary" >Categorias</button>
                </Link>
                </div>
                <br/>
            </div>
        </div>
    </div>
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
    
  </div>);
}

export default AddCategory;