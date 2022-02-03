import React from 'react';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, getCategory} from "../../actions/actionAdmin"
import {useState, useEffect} from "react";
import swal from 'sweetalert';

function AddProdcut() {

  const allCategory = useSelector((state)=>state.fourthRed.category);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCategory())
  },[])

  const [inputBody , setInputBody] = useState({
    idCategory:"",
    name:"",
    description:"",
    image:"",
    color:[],
    price:0,
    stock:0,
    storage:[],
    connectivity:[],
    model:[],
    ram:[]
  })

  console.log(inputBody)

  function handelInput(e){
    e.preventDefault()
    setInputBody({
      ...inputBody,
      [e.target.name]:e.target.value
    })

  }

  function handelArray(e){
    e.preventDefault()
    setInputBody({
      ...inputBody,
      [e.target.name]:[e.target.value]
    })

  }


  function handelSubmit(e){
    e.preventDefault()

    if(inputBody.idCategory!== "" && inputBody.name!==""){
      dispatch(addProduct(inputBody))
      swal("Agregado a la DB!", {
      buttons: false,
      icon: 'success',
      timer: 1500,
    });
      setInputBody({
        idCategory:"",
        name:"",
        description:"",
        image:"",
        color:[],
        price:0,
        stock:0,
        storage:[],
        connectivity:[],
        model:[],
        ram:[]
      })
    }else{
      alert("Complete los campos necesarios para editar el producto")
    }
  }




  return<div className="row">
    <div className="col-lg-3">
        <div className="container-sm" style={{ padding: 20 } }>   
            <div >
                <div className="dropdown">
                <Link to="/admin/product">
                <button type="button" className="btn btn-outline-secondary" >Productos</button>
                </Link>
                </div>
                <br/>
            </div>
        </div>
    </div>

    <div className=" card col-lg-8">
      <br/>
      <h2>Agregar Producto</h2>
      <br/>
      <form onSubmit={e=>handelSubmit(e)}>
          <div className="form-group">
          <label>Categoria</label>
            <select className="form-control" name="idCategory" onChange={e=>handelInput(e)}>
              <option>Seleccione una categoria</option>
              {allCategory.map((e)=>(
                <option value={e.idCategory} key={e.idCategory}>{e.name}</option>))
              }
            </select>
          </div>
        <div className="form-group">
          <label for="exampleInputName">Nombre del Producto</label>
          <input className="form-control" name="name" value={inputBody.name} onChange={e=>handelInput(e)} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Ingrese el nombre"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Descripcion</label>
          <textarea name="description" value={inputBody.description} onChange={e=>handelInput(e)} className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <div className="form-group">
          <label for="exampleInputColor">Color</label>
          <input name="color" value={inputBody.color} onChange={e=>handelArray(e)} type="text" className="form-control" id="exampleInputColor" aria-describedby="emailHelp" placeholder="Ingrese el color"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPreci">Precio</label>
          <input name="price" min="1" value={inputBody.price} onChange={e=>handelInput(e)} type="number" className="form-control" id="exampleInputPreci" aria-describedby="emailHelp" placeholder="Ingrese el precio"/>
        </div>
        <div className="form-group">
          <label for="exampleInputStock">Cantidad</label>
          <input name="stock" min="1" value={inputBody.stock} onChange={e=>handelInput(e)} type="number" className="form-control" id="exampleInputStock" aria-describedby="emailHelp" placeholder="Ingrese la cantidad de productos"/>
        </div>
        <div className="form-group">
          <label for="exampleInputStorage">Almacenamiento</label>
          <input name="storage" value={inputBody.storage} onChange={e=>handelArray(e)} type="text" className="form-control" id="exampleInputStorage" aria-describedby="emailHelp" placeholder="Ingrese el color"/>
        </div>
        <div className="form-group">
          <label for="exampleInputConnectivity">Conectividad</label>
          <input name="connectivity" value={inputBody.connectivity} onChange={e=>handelArray(e)} type="text" className="form-control" id="exampleInputConnectivity" aria-describedby="emailHelp" placeholder="Ingrese el color"/>
        </div>
        <div className="form-group">
          <label for="exampleInputModel">Modelos</label>
          <input name="model" value={inputBody.model} onChange={e=>handelArray(e)} type="text" className="form-control" id="exampleInputModel" aria-describedby="emailHelp" placeholder="Ingrese el color"/>
        </div>
        <div className="form-group">
          <label for="exampleInputRam">Ram</label>
          <input name="ram" value={inputBody.ram} onChange={e=>handelArray(e)} type="text" className="form-control" id="exampleInputRam" aria-describedby="emailHelp" placeholder="Ingrese el color"/>
        </div>
         <div className="form-group" style={{marginTop:10, marginBottom:10}}>
          <label for="exampleFormControlFile1">Imagen</label>
          <input name="image" accept="image/png,image/jpg" value={inputBody.image} onChange={e=>handelInput(e)} type="file" className="form-control-file" id="exampleFormControlFile1"/>
        </div>
        <button className="btn btn-primary" type="submit">Agregar</button>
      </form>
    </div>
  </div>;
}

export default AddProdcut;