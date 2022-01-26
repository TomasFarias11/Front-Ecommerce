import React from "react";
import swal from 'sweetalert';
import { useEffect, useState } from "react";
import {putReview , postReview , getReviews} from '../actions/actionProducts'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function Reviews ({id}) {

    const reviews = useSelector((state) => state.firstRed.reviews)
    const product = useSelector((state) => state.firstRed.productId)

    const dispatch = useDispatch()
    const [input, setInput] = useState({
        calification: '',
        commentary: ''
    })
    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        if (reviews) {
          if (reviews && reviews.filter(e => e.review.userId === 1).length > 0) {
            // e.preventDefault()
            // console.log(review.filter(e => e.review.userId === 1));
            // console.log('1');
            dispatch(putReview(product && product.id, 1, input));
            setInput({
              calification: '',
              commentary: '',
            })
          } else {
            // console.log('2');
            // console.log(review && review.map(e => e.review.userId === 1));
            // e.preventDefault()
            dispatch(postReview(product && product.id,1, input))
            setInput({
              calification: '',
              commentary: '',
            })
          }
        } else {
          e.preventDefault()
          swal("You need to SignIn to leave a devolution", {
            buttons: false,
            icon: 'error',
            timer: 1500,
          })
        }
        Navigate(`/details/${product.id}`)
      }
      
      useEffect(() => {
        dispatch(getReviews(id));
      }, [dispatch]);
      

    return(<>


    <div class="container">{/* la clase container ocupa el 80% de la pantalla y siempre esta centrada*/}
      <div class="row">{/* row es para colocar todo el contenido en filas*/}
        <div class="col-6 mx-auto">{/*col-6 indica que es una columna y su tamaño es de 6. luego el margin auto para que se centre*/}
          <div>
            <form class="row" style={{justifyContent:"space-between"}} onSubmit={(e) => handleSubmit(e)}>
              <textarea class="form-control" style={{marginBottom:20}} type='text' placeholder="comentario..." rows="3"  value={input.commentary} onChange={e => setInput({ ...input, commentary: e.target.value })}></textarea>
              <div style={{marginBottom:20}} class="btn-group col-3" >{/*agrupa los botones*/}
                <label style={{marginRight:20}}>Calificacion</label>
                <input class="form-input" type='number' max={5} min={0} placeholder="1" value={input.calification} onChange={e => setInput({ ...input, calification: e.target.value })} />
              </div>
              <div className="col-3 text-end" style={{marginLeft:50}} >
              <button class="btn btn-primary">Comentar</button>
              </div>
            </form>
          </div>
          <hr class="featurette-divider"/>
          <div>
            {reviews.length > 0 ?
              reviews.map((re) => (
                <div>
                  <div class="be-img-comment">	
                    <a href="blog-detail-2.html">
                      {/* <img src={re.user.image ? re.user.image : "https://media.istockphoto.com/vectors/man-avatar-profile-male-face-icon-vector-illustration-vector-id1142192538"} alt="" class="be-ava-comment"/> */}
                    </a>
                  </div>
                  <div className="review-colomn" >
                  <span class="be-comment-name">
                      <h4 href="blog-detail-2.html">Nombre de usuario: {re.username ? re.username : "username123"}</h4>
                    </span>
                    <div>
                      <h5>Calificacion: {re.calification ? re.calification : 0}</h5>
                    </div>
                    
                    <p class="be-comment-text"><b>Comentario:</b> {re.commentary}</p>
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
