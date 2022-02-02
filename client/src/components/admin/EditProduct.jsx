import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from "../../actions/actionProducts.js";
import {getCategory, editProduct} from "../../actions/actionAdmin"
import {useEffect, useState} from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";


function EditProduct() {

  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const productId = useSelector((state) => state.firstRed.productId)
  const allCategory = useSelector((state)=>state.fourthRed.category);

  console.log(allCategory, "ESTE ES ALL CATEGORY")

  function comparar(productId, allCategory ){
    for (let i= 0; i < allCategory.length; i++) {
      if(allCategory[i].idCategory === productId[0].idCategory) {
          var prueba = allCategory[i].idCategory.name
          return prueba
      } 
      
  }

  }

    useEffect(() => {
    dispatch(getProductById(id))
    dispatch(getCategory())
    setInputBody({
      idCategory:"",
      name:productId.name,
      description:productId.description,
      color:[productId.color],
      price:productId.price,
      stock:productId.stock,
      storage:[productId.storage],
      connectivity:[productId.connectivity],
      model:[productId.model],
      ram:[productId.ram],
      })
  }, [productId.name])

  console.log(productId)
  const [inputBody , setInputBody] = useState({
      idCategory:"",
      name:productId.name,
      description:productId.description,
      color:[productId.color],
      price:productId.price,
      stock:productId.stock,
      storage:[productId.storage],
      connectivity:[productId.connectivity],
      model:[productId.model],
      ram:[productId.ram],
      image:""
  })


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

    if(inputBody.image===""){
      setInputBody({
        image:productId.image
      })
    }

    if(inputBody.idCategory!== "" && inputBody.name!==""){
      dispatch(editProduct(id, inputBody))
      alert("producto editado")
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
      navigate("/admin/product")
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
                <button type="button" class="btn btn-outline-secondary" >Productos</button>
                </Link>
                </div>
                <br/>
                <div className="dropdown">
                <Link to="/admin/addProduct">
                <button type="button" class="btn btn-outline-secondary" >Agregar Productos</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    <div className=" card col-lg-8">
    <br/>
    <h2>Editar Producto</h2>
    <p><b>ID: </b><span>{productId.id}</span></p>
    <br/>
    <div className="row">

    {/* el div de abajo muestra los valores actuales*/}

    <div className=" card col-lg-6" style={{marginTop:20}}>
      <div class="form-group">
          <h2>Categoria</h2>

          {/* AQUI VAMOS */}
          <p >{() => comparar(productId, allCategory)} </p>
        {/*Array.isArray(allCategory) ? allCategory.map(e=> e.idCategory===productId.idCategory return(<p>{e.name}</p>)): null*/}
        </div>
        <div class="form-group" autofocus>
          <h2>Nombre del Producto</h2>
          <p>{productId.name}</p>
        </div>
        <div class="form-group">
          <h2>Descripcion</h2>
          <p>{productId.description}</p>
        </div>
        <div class="form-group">
          <h2>Color</h2>
          <p>{Array.isArray(productId.color) && productId.color.map((e) => <span key={e}> {e}. </span>)}</p>
        </div>
        <div class="form-group">
          <h2>Precio</h2>
          <p>{productId.price}</p>
        </div>
        <div class="form-group">
          <h2>Almacenamiento</h2>
          {productId.storage !== null ? (<p> {Array.isArray(productId.storage) && productId.storage.map((e) => <span key={e}> {e}. </span>)}</p>) : null}
        </div>
        <div class="form-group">
          <h2>Conectividad</h2>
          {productId.connectivity !== null ? (<p>{Array.isArray(productId.connectivity) && productId.connectivity.map((e) => <span key={e}> {e}. </span>)}</p>) : null}
        </div>
        <div class="form-group">
          <h2>Modelos</h2>
          {productId.model !== null ? (<p> {Array.isArray(productId.model) && productId.model.map((e) => <span key={e}> {e}. </span>)}</p>) : null}
        </div>
        <div class="form-group">
          <h2>Ram</h2>
          {productId.ram !== null ? (<p>{Array.isArray(productId.ram) && productId.ram.map((e) => <span key={e}> {e}. </span>)}</p>) : null}
        </div>
      </div>

       {/* el div de abajo es donde esta el formulario*/}


      <div className=" card col-lg-6" style={{marginTop:20}}>
      <form onSubmit={e=>handelSubmit(e)}>
        <div class="form-group">
          <label>Categoria</label>
            <select class="form-control" name="idCategory" onChange={e=>handelInput(e)}>
              <option>Seleccione una categoria</option>
              {allCategory.map((e)=>(
                <option value={e.idCategory} key={e.idCategory}>{e.name}</option>))
              }
            </select>
          </div>
        <div class="form-group">
          <label for="exampleInputName">Nombre del Producto</label>
          <input name="name" value={inputBody.name} onChange={e=>handelInput(e)} type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Ingrese el nombre"/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Descripcion</label>
          <textarea name="description" value={inputBody.description} onChange={e=>handelInput(e)} class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <div class="form-group">
          <label for="exampleInputColor">Color</label>
          <input name="color" value={inputBody.color} onChange={e=>handelArray(e)} type="text" class="form-control" id="exampleInputColor" aria-describedby="emailHelp" placeholder="Ingrese el color"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPreci">Precio</label>
          <input name="price" min="1" value={inputBody.price} onChange={e=>handelInput(e)} type="number" class="form-control" id="exampleInputPreci" aria-describedby="emailHelp" placeholder="Ingrese el precio"/>
        </div>
        <div class="form-group">
          <label for="exampleInputStock">Cantidad</label>
          <input name="stock" min="1" value={inputBody.stock} onChange={e=>handelInput(e)} type="number" class="form-control" id="exampleInputStock" aria-describedby="emailHelp" placeholder="Ingrese la cantidad de productos"/>
        </div>
        <div class="form-group">
          <label for="exampleInputStorage">Almacenamiento</label>
          <input name="storage" value={inputBody.storage} onChange={e=>handelArray(e)} type="text" class="form-control" id="exampleInputStorage" aria-describedby="emailHelp" placeholder="Ingrese el color"/>
        </div>
        <div class="form-group">
          <label for="exampleInputConnectivity">Conectividad</label>
          <input name="connectivity" value={inputBody.connectivity} onChange={e=>handelArray(e)} type="text" class="form-control" id="exampleInputConnectivity" aria-describedby="emailHelp" placeholder="Ingrese el color"/>
        </div>
        <div class="form-group">
          <label for="exampleInputModel">Modelos</label>
          <input name="model" value={inputBody.model} onChange={e=>handelArray(e)} type="text" class="form-control" id="exampleInputModel" aria-describedby="emailHelp" placeholder="Ingrese el color"/>
        </div>
        <div class="form-group">
          <label for="exampleInputRam">Ram</label>
          <input name="ram" value={inputBody.ram} onChange={e=>handelArray(e)} type="text" class="form-control" id="exampleInputRam" aria-describedby="emailHelp" placeholder="Ingrese el color"/>
        </div>
         <div class="form-group" style={{marginTop:10, marginBottom:10}}>
          <label for="exampleFormControlFile1">Imagen</label>
          <input name="image" value={inputBody.image} onChange={e=>handelInput(e)} type="file" class="form-control-file" id="exampleFormControlFile1"/>
        </div>
        <button class="btn btn-primary" type="submit">Editar</button>
      </form>
      </div>

    </div>
    </div>
  </div>
  ;
}

export default EditProduct;