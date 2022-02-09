import React from "react";
import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductByCategory } from "../actions/actionProducts.js";
import { Link } from "react-router-dom";

const Footer = () => {
  const dispatch = useDispatch();
  // const Navigate = useNavigate();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   dispatch(getProductByCategory(e.target.value));
  //   Navigate(`/category/${e.target.value}`);
  // };

  const [input, setInput] = useState({
    name: '',
    email: '',
    message:''
});

const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
}

const handleSubmit =async (e) => {
    e.preventDefault()
    const mail = await axios.post('/mercadopago/sendemail',input);
}


// console.log('INPUT',input)


  return (
    <div>
      {/* <h1>Soy el footer</h1> */}

      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Encuéntranos en nuestras redes sociales:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="fw-bold mb-3">
                  iGroup-6 | <i className="fab fa-apple"></i> Premium Reseller
                </h6>
                <div className="row">
                  <p>
                    <em>
                      {" "}
                      "Es mejor ser un pirata que pertencer a la Marina"{" "}
                    </em>
                  </p>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title">Steve Jobs</cite>
                  </figcaption>
                </div>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Productos</h6>

                <p>
                  <Link
                    style={{ textDecoration: "none", color: "gray" }}
                    to="/category/iphone"
                  >
                    <span
                      className="text-reset"
                      onClick={() => dispatch(getProductByCategory("iPhone"))}
                    >
                      iPhone
                    </span>
                  </Link>
                </p>
                <p>
                  <Link
                    style={{ textDecoration: "none", color: "gray" }}
                    to="/category/iphone"
                  >
                    <span
                      className="text-reset"
                      onClick={() => dispatch(getProductByCategory("iPad"))}
                    >
                      iPad
                    </span>
                  </Link>
                </p>
                <p>
                  <Link
                    style={{ textDecoration: "none", color: "gray" }}
                    to="/category/watch"
                  >
                    <span
                      className="text-reset"
                      onClick={() => dispatch(getProductByCategory("Watch"))}
                    >
                      Watch
                    </span>
                  </Link>
                </p>
                <p>
                  <Link
                    style={{ textDecoration: "none", color: "gray" }}
                    to="/category/airpods"
                  >
                    <span
                      className="text-reset"
                      onClick={() => dispatch(getProductByCategory("AirPods"))}
                    >
                      AirPods
                    </span>
                  </Link>
                </p>
                <p>
                  <Link
                    style={{ textDecoration: "none", color: "gray" }}
                    to="/category/airpods"
                  >
                    <span
                      className="text-reset"
                      onClick={() => dispatch(getProductByCategory("Mac"))}
                    >
                      Mac
                    </span>
                  </Link>
                </p>
                <p>
                  <Link
                    style={{ textDecoration: "none", color: "gray" }}
                    to="/category/tv"
                  >
                    <span
                      className="text-reset"
                      onClick={() =>
                        dispatch(getProductByCategory("TV & Home"))
                      }
                    >
                      TV & Home
                    </span>
                  </Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <>
                  <button
                    type="button"
                    className="btn btn-info text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@igroup"
                  >
                    <i className="far fa-comment-dots"></i> Mensaje Directo
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Envíanos un mensaje directo
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="mb-3">
                              <label
                                // htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                Nombre y Apellido:
                              </label>
                              <input
                                type="text"
                                value={input.name}
                                name="name" 
                                onChange={handleInputChange}
                                className="form-control"
                                id="recipient-name"
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                // htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                Email:
                              </label>
                              <input
                                type="email"
                                value={input.email} 
                                name="email" 
                                onChange={handleInputChange}
                                className="form-control"
                                id="recipient-name"
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="message-text"
                                className="col-form-label"
                              >
                                Mensaje:
                              </label>
                              <textarea
                                form="htmlFor"
                                type="text" 
                                value={input.message} 
                                name="message" 
                                onChange={handleInputChange}
                                className="form-control"
                                id="message-text"
                                // defaultValue={""}
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Cerrar
                          </button>
                          <button 
                          type="submit" 
                          value="Enviar Mensaje"
                          data-bs-dismiss="modal" 
                          onClick={handleSubmit} 
                          className="btn btn-success">
                            Enviar Mensaje
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
                <hr />

                <p>
                  <i className="fas fa-phone" /> + 54 11 34567 88
                </p>
                <a
                  style={{ textDecoration: "none", color: "gray" }}
                  href="mailto: igroup6.apple@gmail.com"
                >
                  <p>
                    <i className="fas fa-envelope"></i>{" "}
                    <i>igroup6.apple@gmail.com</i>
                  </p>
                </a>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:
          <p>
            iGroup-6 | <i className="fab fa-apple"></i> Premium Reseller
          </p>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
};

export default Footer;
