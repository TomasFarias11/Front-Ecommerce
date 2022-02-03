import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from "../../actions/actionProducts.js";
import {getCategory, editProduct} from "../../actions/actionAdmin"
import {useEffect, useState} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


function EditProduct() {

  const { id } = useParams();
  const dispatch = useDispatch()
  const productId = useSelector((state) => state.firstRed.productId)
  const allCategory = useSelector((state)=>state.fourthRed.category);

  const [inputBody , setInputBody] = useState({
    idUser:"1",
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

  console.log("producto", productId)
  console.log("input", inputBody)


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
      dispatch(editProduct(id, inputBody))
      alert("producto agregado a la db")
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


  useEffect(() => {
    dispatch(getProductById(id))
    dispatch(getCategory())
  }, [dispatch])

  return(
  <div className="row">
  <div className="col-lg-3">
        <div className="container-sm" style={{ padding: 20 } }>   
            <div >
                <div className="dropdown">
                <Link to="/admin/product">
                <button type="button" className="btn btn-outline-secondary" >Productos</button>
                </Link>
                </div>
                <br/>
                <div className="dropdown">
                <Link to="/admin/addProduct">
                <button type="button" className="btn btn-outline-secondary" >Agregar Productos</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    <div className=" card col-lg-8">
    <br/>
    <h1>Editar Producto</h1>
    <p><b>ID: </b><span>{productId.id}</span></p>
    <br/>
    <div className="row">

    {/* el div de abajo muestra los valores actuales*/}

    <div className=" card col-lg-6" style={{marginTop:20}}>
      <div className="form-group">
          <h2>Categoria</h2>
        {/*Array.isArray(allCategory) ? allCategory.map(e=> e.idCategory===productId.idCategory return(<p>{e.name}</p>)): null*/}
        </div>
        <div className="form-group">
          <h2>Nombre del Producto</h2>
          <p>{productId.name}</p>
        </div>
        <div className="form-group">
          <h2>Descripcion</h2>
          <p>{productId.description}</p>
        </div>
        <div className="form-group">
          <h2>Color</h2>
          <p>{Array.isArray(productId.color) && productId.color.map((e) => <span key={e}> {e}. </span>)}</p>
        </div>
        <div className="form-group">
          <h2>Precio</h2>
          <p>{productId.price}</p>
        </div>
        <div className="form-group">
          <h2>Almacenamiento</h2>
          {productId.storage !== null ? (<p> {Array.isArray(productId.storage) && productId.storage.map((e) => <span key={e}> {e}. </span>)}</p>) : null}
        </div>
        <div className="form-group">
          <h2>Conectividad</h2>
          {productId.connectivity !== null ? (<p>{Array.isArray(productId.connectivity) && productId.connectivity.map((e) => <span key={e}> {e}. </span>)}</p>) : null}
        </div>
        <div className="form-group">
          <h2>Modelos</h2>
          {productId.model !== null ? (<p> {Array.isArray(productId.model) && productId.model.map((e) => <span key={e}> {e}. </span>)}</p>) : null}
        </div>
        <div className="form-group">
          <h2>Ram</h2>
          {productId.ram !== null ? (<p>{Array.isArray(productId.ram) && productId.ram.map((e) => <span key={e}> {e}. </span>)}</p>) : null}
        </div>
      </div>

       {/* el div de abajo es donde esta el formulario*/}


      <div className=" card col-lg-6" style={{marginTop:20}}>
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
          <input name="name" value={inputBody.name} onChange={e=>handelInput(e)} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Ingrese el nombre"/>
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
          <input name="image" value={inputBody.image} onChange={e=>handelInput(e)} type="file" className="form-control-file" id="exampleFormControlFile1"/>
        </div>
        <button className="btn btn-primary" type="submit">Editar</button>
      </form>
      </div>

    </div>
    </div>
  </div>
  )
}

export default EditProduct;