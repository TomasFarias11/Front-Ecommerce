import React from "react";
import swal from 'sweetalert';
import { useEffect, useState } from "react";
import {putReview , postReview , getReviews} from '../actions/actionProducts'
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';
import '../css/Reviews.css'

export default function Reviews ({id}) {

    const reviews = useSelector((state) => state.firstRed.reviews)
    const product = useSelector((state) => state.firstRed.productId)

    const dispatch = useDispatch()
    const [input, setInput] = useState({
        calification: '',
        commentary: ''
    })
    // const Navigate = useNavigate()

   const user = JSON.parse(window.localStorage.getItem( 'usuario'))
  //  const alo = reviews.filter(e => e.review.userId === user.id).length
  //  console.log(user, "este mensaje es el que frao")

    const handleSubmit = (e) => {
      e.preventDefault()
        if (reviews) {
          if ( !user.username ) {
            e.preventDefault()
            swal("Necesitas tener una cuenta para dejar comentarios", {
              buttons: false,
              icon: 'error',
              timer: 1500,
            })
            setInput({
              calification: '',
              commentary: '',
            })
          }
          else if ( reviews.filter(e => e.username.toLowerCase() === user.username.toLowerCase()).length > 0) {
            e.preventDefault()
            dispatch(putReview(product && product.id, user.id, input));
            setInput({
              calification: '',
              commentary: '',
            })
          } else if ( !user.admin ) {
            e.preventDefault()
            dispatch(postReview(product && product.id, user.id , input))
            setInput({
              calification: '',
              commentary: '',
            })
          
          } else if ( user.admin ) {
          e.preventDefault()
          swal("Los usuarios administradores no pueden dejar comentarios a los productos", {
            buttons: false,
            icon: 'error',
            timer: 3500,
          })
          }
        } 
        
      }       
      useEffect(() => {
        dispatch(getReviews(id));
      }, [dispatch]);
      

    return(<>
    <div className="container">{/* la clase container ocupa el 80% de la pantalla y siempre esta centrada*/}
      <div className="row">{/* row es para colocar todo el contenido en filas*/}
        <div className="col-6 mx-auto">{/*col-6 indica que es una columna y su tamaño es de 6. luego el margin auto para que se centre*/}
          <div>
            <form className="row" style={{justifyContent:"space-between"}} onSubmit={(e) => handleSubmit(e)}>
              <textarea  className="form-control" style={{marginBottom:20}} type='text' placeholder="comentario..." rows="3"  value={input.commentary} onChange={e => setInput({ ...input, commentary: e.target.value })}></textarea>
              <div style={{marginBottom:20}} className="btn-group col-3" >{/*agrupa los botones*/}
                <label style={{marginRight:20}}>Calificacion</label>
                <input className="form-input" type='number' max={5} min={1} placeholder="0" value={input.calification} required={true} onChange={e => setInput({ ...input, calification: e.target.value })} />
              </div>
              <div className="col-3 text-end" style={{marginLeft:50}} >
              <button className="btn btn-primary">Comentar</button>
              </div>
            </form>
          </div>
          <hr className="featurette-divider"/>
          <div>
            {reviews.length > 0 ?
              reviews.map((re) => (
                <div key={re.username} >
                  <div className="be-img-comment" >	
                    <a href=" ">
                      <img src={re.image ? re.image : "https://media.istockphoto.com/vectors/man-avatar-profile-male-face-icon-vector-illustration-vector-id1142192538"} alt="" className="be-ava-comment"/>
                    </a>
                  </div>
                  <div className="review-colomn" >
                  <span className="be-comment-name">
                      <h5 href="blog-detail-2.html">Nombre de usuario: {re.username ? re.username : "username123"}</h5>
                    </span>
                    <div>
                      <h6>Calificacion: {
                            parseInt(re.calification)  === 1? <div><i className="fas fa-star"></i></div>
                           : parseInt(re.calification)  === 2? <div><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                           : parseInt(re.calification)  === 3? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                           : parseInt(re.calification)  === 4? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                           : parseInt(re.calification)  === 5? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                           : <h1>1</h1>
                        }</h6>
                    </div>
                    
                    <p className="be-comment-text"><b>Comentario:</b> {re.commentary}</p>
                  </div> 
                </div>
              )) 
            :  null 
            }{/*<h2>No hay comentarios</h2>*/}
            </div>
            
          
        </div>
      </div>
    </div>

    </>
    )
}
