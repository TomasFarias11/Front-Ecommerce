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




  return(

  <div>
    <div className="row">
      <div className="col-lg-3">
        <div className="container-sm d-flex justify-content-center" style={{ padding:20, paddingTop:0 }}> 
          <div className="badge fs-3 bg-dark text-wrap" style={{ width: "20rem" }}>
              Formulario para añadir nuevos Productos
          </div>
        </div>
        <div className='d-flex justify-content-center' style={{ paddingTop:0 } } >
          <Link to="/admin/product">
            <button type="button" className="btn btn-outline-success btn-lg">Lista de Productos</button>
          </Link>
        </div>
      </div>
      <div className=" card col-lg-8">
        <div className="container mt-4 mb-5 mx-3">
          <form onSubmit={e=>handelSubmit(e)} className='row g-3'>
            <div className="row mt-3">
              <div className="col-md-12">
                <div className="card">              
                  <div className="card-header d-flex align-items-center">
                    <div className="container-sm d-flex justify-content-center" style={{ padding:0, paddingTop:0 }}> 
                      <div className="badge fs-5 bg-info text-wrap" style={{ width: "20rem" }}>
                        Complete los siguientes campos
                      </div>
                    </div>
                  </div>
                  <div className='card-group'>
                    <div className="card-body">
                      <div className="col-sm-10">
                        <label for="exampleInputName">Nombre del Producto</label>
                        <input className="form-control" name="name" value={inputBody.name} onChange={e=>handelInput(e)} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Ingrese el nombre"/>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="col-sm-10">
                          <div className="form-group">
                            <label htmlFor="event_category">Categoría</label>
                              <select
                                className="form-select"
                                id="event_category"
                                type="text"
                                name="idCategory" 
                                onChange={e=>handelInput(e)}
                                >
                                <option>Seleccione una categoría</option>
                                  {allCategory.map((e)=>(
                                <option value={e.idCategory} key={e.idCategory}>{e.name}</option>))
                                }
                              </select>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className='card-group'>
                    <div className="card-body">
                      <div className="col-sm-10">
                        <label for="exampleInputColor">Color</label>
                        <input name="color" value={inputBody.color} onChange={e=>handelArray(e)} type="text" className="form-control" id="exampleInputColor" aria-describedby="emailHelp" placeholder="Ingrese el color"/>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="col-sm-10">
                        <label for="exampleInputPreci">Precio</label>
                        <input name="price" min="1" value={inputBody.price} onChange={e=>handelInput(e)} type="number" className="form-control" id="exampleInputPreci" aria-describedby="emailHelp" placeholder="Ingrese el precio"/>
                      </div>
                    </div>
                  </div>
                  <div className='card-group'>
                    <div className="card-body">
                      <div className="col-sm-10">
                        <label for="exampleInputStorage">Almacenamiento</label>
                        <input name="storage" value={inputBody.storage} onChange={e=>handelArray(e)} type="text" className="form-control" id="exampleInputStorage" aria-describedby="emailHelp" placeholder="Ingrese el almacenamiento"/>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="col-sm-10">
                        <label for="exampleInputStock">Cantidad</label>
                        <input name="stock" min="1" value={inputBody.stock} onChange={e=>handelInput(e)} type="number" className="form-control" id="exampleInputStock" aria-describedby="emailHelp" placeholder="Ingrese la cantidad de productos"/>
                      </div>
                    </div>
                  </div>
                  <div className='card-group'>
                    <div className="card-body">
                      <div className="col-sm-10">
                        <label for="exampleInputConnectivity">Conectividad</label>
                        <input name="connectivity" value={inputBody.connectivity} onChange={e=>handelArray(e)} type="text" className="form-control" id="exampleInputConnectivity" aria-describedby="emailHelp" placeholder="Ingrese tipo de conectividad"/>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="col-sm-10">
                        <label for="exampleInputModel">Modelo</label>
                        <input name="model" value={inputBody.model} onChange={e=>handelArray(e)} type="text" className="form-control" id="exampleInputModel" aria-describedby="emailHelp" placeholder="Ingrese el modelo"/>
                      </div>
                    </div>
                  </div>
                  <div className='card-group'>
                    <div className="card-body">
                      <div className="col-sm-5">
                        <label for="exampleInputRam">Memoria RAM</label>
                        <input name="ram" value={inputBody.ram} onChange={e=>handelArray(e)} type="text" className="form-control" id="exampleInputRam" aria-describedby="emailHelp" placeholder="Ingrese memoria RAM"/>
                      </div>
                    </div>
                  </div>
                  <div className='card-group'>
                    <div className="card-body">
                      <div className="col-sm-11">
                        <label for="exampleFormControlTextarea1">Descripción</label>
                        <textarea name="description" 
                          value={inputBody.description} 
                          onChange={e=>handelInput(e)} 
                          className="form-control" 
                          id="exampleFormControlTextarea1" 
                          rows={4}
                          placeholder="Ingrese la descripción del producto">
                        </textarea>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="col-sm-11">
                      <label for="exampleFormControlFile1">Imagen</label>
                      <input name="image" accept=".jpg, .jpeg, .png" value={inputBody.image} onChange={e=>handelInput(e)} type="file" className="form-control" id="exampleFormControlFile1"/>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="col-sm-11">
                      <div className="form-group d-flex justify-content-end mt-2">
                        <button className="btn btn-success btn-lg d-flex align-items-center float-right">
                          Añadir Producto
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
      <br/>
  </div>
  )
}

export default AddProdcut;