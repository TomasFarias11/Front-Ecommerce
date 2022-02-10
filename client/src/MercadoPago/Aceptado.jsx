import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { updateOrder } from "../actions/actionProducts";
import { sendMail } from "../actions/actionMercadoPago";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Aceptado() {
  const idUser = JSON.parse(window.localStorage.getItem("usuario")).id;

  const cliente = JSON.parse(window.localStorage.getItem("todojunto")).payer;

  const dispatch = useDispatch();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const userId = useSelector((state) => state.secondRed.userId);
  const carrito = useSelector((state) => state.firstRed.cart);
  console.log("ID", userId);

  const payment_id = parseInt(query.get("payment_id"));
  const status = query.get("status");
  console.log("pay", payment_id);
  console.log("status", status);

  //Object.defineProperty(cliente, 'payment_id', {value: payment_id});

  useEffect(() => {
    dispatch(sendMail(cliente, idUser));
    !!payment_id && !!status
      ? dispatch(
          updateOrder(idUser, { payment_id: payment_id, status: status })
        )
      : console.log(carrito);
  }, []);

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div
          className=" card col-lg-8"
          style={{ marginTop: 30, marginLeft: 10, marginBottom: 10 }}
        >
          <img
            className="img-fluid"
            src="https://i.postimg.cc/wvP7LJk6/Listo-Se-acredit-tu-pago-2.png"
            alt="pago"
          />
        </div>
      </div>
      <div className="container">
        <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary  btn-lg col-sm-3"
              style={{ marginTop: 0, marginBottom: 40 }}
            >
              Volver al Home
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
