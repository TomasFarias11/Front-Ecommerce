import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../actions/actionProducts.js";
import { getCategory, editProduct } from "../../actions/actionAdmin";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import Details from "..//..//pages/Details.jsx";
import swal from "sweetalert";
import Swal from "sweetalert2";

function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productId = useSelector((state) => state.firstRed.productId);
  const allCategory = useSelector((state) => state.fourthRed.category);
  const formato = new Intl.NumberFormat("de-DE", {
    // style: 'currency',
    // currency: 'USD',
    // minimumFractionDigits: 3,
  });

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getCategory());
    setInputBody({
      idCategory: "",
      name: productId.name,
      description: productId.description,
      color: productId.color,
      price: productId.price,
      stock: productId.stock,
      storage: productId.storage,
      connectivity: productId.connectivity,
      model: productId.model,
      ram: productId.ram,
    });
  }, [productId.name]);

  const [inputBody, setInputBody] = useState({
    idCategory: "",
    name: productId.name,
    description: productId.description,
    color: [productId.color],
    price: productId.price,
    stock: productId.stock,
    storage: [productId.storage],
    connectivity: [productId.connectivity],
    model: [productId.model],
    ram: [productId.ram],
    image: "",
  });

  console.log("body", inputBody);

  function handelInput(e) {
    e.preventDefault();
    setInputBody({
      ...inputBody,
      [e.target.name]: e.target.value,
    });
  }

  function handelArray(e) {
    e.preventDefault();
    setInputBody({
      ...inputBody,
      [e.target.name]: [e.target.value],
    });
  }

  function handelSubmit(e) {
    e.preventDefault();

    if (inputBody.image === "") {
      setInputBody({
        image: productId.image,
      });
    }

    if (inputBody.idCategory !== "" && inputBody.name !== "") {
      dispatch(editProduct(id, inputBody));
      swal("Producto Editado Correctamente", {
        buttons: false,
        icon: "success",
        timer: 1500,
      });
      setInputBody({
        idCategory: "",
        name: "",
        description: "",
        image: "",
        color: [],
        price: 0,
        stock: 0,
        storage: [],
        connectivity: [],
        model: [],
        ram: [],
      });
      navigate("/admin/product");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, rellene los campos necesarios para editar el producto",
      });
    }
  }

  return (
    <div className="row" style={{ paddingBottom: 30 }}>
      <div className="col-lg-3">
        <div className="container-sm" style={{ padding: 20 }}>
            <div className="container-sm d-flex justify-content-center" style={{ padding: 20, paddingTop: 0 }}>
              <div className="badge fs-5 bg-dark text-wrap" style={{ width: "20rem" }}>
                Formulario para editar información de Producto Existente
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <Link to="/admin/product">
                <button type="button" className="btn btn-lg btn-outline-info">
                  Lista de Productos
                </button>
              </Link>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <Link to="/admin/addProduct">
                <button
                  type="button"
                  className="btn btn-lg btn-outline-success"
                >
                  Añadir Producto
                </button>
              </Link>
            </div>
        </div>
      </div>
      <div className=" card col-lg-8">
        <hr />
        <div className="card-header d-flex align-items-center">
          <div className="container-sm d-flex justify-content-center" style={{ padding: 0, paddingTop: 0 }}>
            <div className="badge fs-5 bg-info text-wrap" style={{ width: "20rem" }}>
              Editar Producto
              <br />
              ID:<span>{productId.id}</span>
            </div>
          </div>
        </div>

        <div className="row">
          {/* el div de abajo muestra los valores actuales*/}

          <div className=" card col-lg-6" style={{ marginTop: 20 }}>
            <div className="form-group">
              <div className="container">
                <hr />
                <div className="row featurette">
                  <div className="col-md-10 order-md-2">
                    <div className="col-md-7 order-md-1">
                      <img
                        alt="not found"
                        className="img-fluid"
                        src={
                          inputBody.image ? inputBody.image : productId.image
                        }
                        aria-label="Placeholder: 500x500"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      />
                    </div>
                    <br />
                    <h4 className="featurette-heading">{inputBody.name}</h4>
                    <br />
                    <h5>Descripción</h5>
                    <small>{inputBody.description}</small>
                    {inputBody.model !== null ? (
                      <p>
                        <b>Modelo:</b>{" "}
                        {Array.isArray(inputBody.model) &&
                          inputBody.model.map((e) => (
                            <span key={e}> {e}. </span>
                          ))}
                      </p>
                    ) : null}
                    <p>
                      <b>Color:</b>
                      {Array.isArray(inputBody.color) &&
                        inputBody.color.map((e) => <span key={e}> {e}. </span>)}
                    </p>
                    {inputBody.storage !== null ? (
                      <p>
                        <b>Almacenamiento:</b>{" "}
                        {Array.isArray(inputBody.storage) &&
                          inputBody.storage.map((e) => (
                            <span key={e}> {e}. </span>
                          ))}
                      </p>
                    ) : null}
                    {inputBody.ram !== null ? (
                      <p>
                        <b>Memoria RAM:</b>{" "}
                        {Array.isArray(inputBody.ram) &&
                          inputBody.ram.map((e) => <span key={e}> {e}. </span>)}
                      </p>
                    ) : null}
                    <p>
                      <b>Precio:</b> ${formato.format(inputBody.price)}
                    </p>
                    {inputBody.stock > 0 ? (
                      <p>
                        <b>Stock:</b> {inputBody.stock}
                      </p>
                    ) : (
                      <p>
                        <b>Stock:</b> Exhausted
                      </p>
                    )}
                  </div>
                  {/* en este div se ingresa la img */}
                </div>
                <hr className="featurette-divider" />
              </div>
            </div>
          </div>

          {/* el div de abajo es donde esta el formulario*/}

          <div className=" card col-lg-6" style={{ marginTop: 20 }}>
            <hr />
            <div className="container mt-4 mb-5 mx-1">
              <form onSubmit={(e) => handelSubmit(e)} className="row g-2">
                <div className="form-group">
                  <label>Categoría</label>
                  <select
                    className="form-control"
                    name="idCategory"
                    onChange={(e) => handelInput(e)}
                  >
                    <option>Seleccione una categoría</option>
                    {allCategory.map((e) => (
                      <option value={e.idCategory} key={e.idCategory}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleInputName">Nombre del Producto</label>
                  <input
                    name="name"
                    value={inputBody.name}
                    onChange={(e) => handelInput(e)}
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese el nombre"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Descripción</label>
                  <textarea
                    name="description"
                    value={inputBody.description}
                    onChange={(e) => handelInput(e)}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label for="exampleInputColor">Color</label>
                  <input
                    name="color"
                    value={inputBody.color}
                    onChange={(e) => handelArray(e)}
                    type="text"
                    className="form-control"
                    id="exampleInputColor"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese el color"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPreci">Precio</label>
                  <input
                    name="price"
                    min="1"
                    value={inputBody.price}
                    onChange={(e) => handelInput(e)}
                    type="number"
                    className="form-control"
                    id="exampleInputPreci"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese el precio"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputStock">Stock</label>
                  <input
                    name="stock"
                    min="1"
                    value={inputBody.stock}
                    onChange={(e) => handelInput(e)}
                    type="number"
                    className="form-control"
                    id="exampleInputStock"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese la cantidad de productos"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputStorage">Almacenamiento</label>
                  <input
                    name="storage"
                    value={inputBody.storage}
                    onChange={(e) => handelArray(e)}
                    type="text"
                    className="form-control"
                    id="exampleInputStorage"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese el color"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputConnectivity">Conectividad</label>
                  <input
                    name="connectivity"
                    value={inputBody.connectivity}
                    onChange={(e) => handelArray(e)}
                    type="text"
                    className="form-control"
                    id="exampleInputConnectivity"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese tipo de conectividad"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputModel">Modelos</label>
                  <input
                    name="model"
                    value={inputBody.model}
                    onChange={(e) => handelArray(e)}
                    type="text"
                    className="form-control"
                    id="exampleInputModel"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese el modelo"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputRam">Memoria RAM</label>
                  <input
                    name="ram"
                    value={inputBody.ram}
                    onChange={(e) => handelArray(e)}
                    type="text"
                    className="form-control"
                    id="exampleInputRam"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese la memoria RAM"
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: 10, marginBottom: 30 }}
                >
                  <label for="exampleFormControlFile1">Imagen</label>
                  <input
                    name="image"
                    value={inputBody.image}
                    onChange={(e) => handelInput(e)}
                    type="file"
                    className="form-control"
                    id="exampleFormControlFile1"
                  />
                </div>
                <button className="btn btn-success" type="submit">
                  Confirmar Cambios
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
