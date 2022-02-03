import {React,useState} from "react";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserId, editUser} from "../actions/actionUser.js"
import EditProfile from "./EditProfile.jsx"


const Perfil = () =>{
  const dispatch = useDispatch()
  const user = useSelector((state) => state.secondRed.userData)
  const userId = useSelector((state) => state.secondRed.userId)
  const [controlador, setControlador] = useState(false)


  useEffect(() => {
    dispatch(getUserId(user.id))
  },[])

  const handleControl = (e) => {
    e.preventDefault()
    if (controlador === false) {
      setControlador(true)
    } else {
      setControlador(false)
    }
  }

	return(
		<div className="container">
      
      <div className="row gutters-sm">

        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src={userId.image} alt="Admin" className="rounded-circle" width="150"/>
                <div className="mt-3">
                  <h4>{userId.username}</h4>
                  <p className="text-secondary mb-1">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
          {controlador === true ?
          <div>
            <EditProfile/>
            <button onClick={(e) => handleControl(e)}>Cerrar</button>
          </div>
            :
            <button onClick={(e) => handleControl(e)}>Editar</button>
          }
        </div>
        

        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Nombre Completo</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                {userId.name} {userId.lastName}
                </div>
              </div>

              <hr/>

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userId.email}
                </div>
                </div>

                <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Admin</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {`${userId.admin}`}
                  </div>
                </div>

                <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Login con Google</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {`${userId && userId.loginWithGoogle}`}
                  </div>
                </div>

                <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userId.address && userId.address === "null" ? "Dato no ingresado" : userId.address}
                  </div>
                </div>

                <hr/>

            </div>
          </div>

        {/*aqui se puede colocar un ternario para saber si es usuario o es admin */}

        <div className="row gutters-sm">

          <div className="col-sm-12 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="d-flex align-items-center mb-3">Ordenes</h6>
                <small>Web Design</small>
                <div className="progress mb-3" >     
                </div>
                <small>Website Markup</small>
                <div className="progress mb-3" > 
                </div>
                <small>One Page</small>
                <div className="progress mb-3" > 
                </div>
                <small>Mobile Template</small>
                <div className="progress mb-3" >
                </div>
                <small>Backend API</small>
                <div className="progress mb-3" >
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
	)
}

export default Perfil;