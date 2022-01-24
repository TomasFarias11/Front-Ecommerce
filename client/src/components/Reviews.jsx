import React from "react";
import swal from 'sweetalert';
import { useEffect, useState } from "react";
import {putReview , postReview , getReviews} from '../actions/actionProducts'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function Reviews ({id}) {

    const reviews = useSelector((state) => state.firstRed.reviews)
    const product = useSelector((state) => state.firstRed.productId)
    // console.log('reviews', reviews)
    console.log('id del prod', product)
    // const user = useSelector((state) => state.firstRed.user)
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        calification: '',
        commentary: ''
    })

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
    
    <div class="container">
  <div class="be-comment-block">
    <div class="be-comment">
      <div class="be-comment-content">
      {reviews.length > 0 ?
              reviews.map((re) => (
                <div>
                      <div class="be-img-comment">	
        <a href="blog-detail-2.html">
          {/* <img src={re.user.image ? re.user.image : "https://media.istockphoto.com/vectors/man-avatar-profile-male-face-icon-vector-illustration-vector-id1142192538"} alt="" class="be-ava-comment"/> */}
        </a>
      </div>
  
                <div className="review-colomn" >
                  <div  >
                    <h5>Calificacion: {re.calification ? re.calification : 0}</h5>
                  </div>
                <span class="be-comment-name">
                  <h4 href="blog-detail-2.html">Nombre de usuario: {re.username ? re.username : "username123"}</h4>
                </span>
                <p class="be-comment-text">Comentario: {re.commentary}</p>
                </div> 
              </div>
              )) 
            : <h2>No hay comentarios</h2>
            }
  
      </div>
    </div>
    <form class="form-block" onSubmit={(e) => handleSubmit(e)}>
      <div class="row">
        <div class="col-xs-12">									
          <div class="form-group">
          <input class="form-input" type='number' max={5} min={0} placeholder="valoration" value={input.calification} onChange={e => setInput({ ...input, calification: e.target.value })}></input>
            <textarea class="form-input" type='text' placeholder="comentario..." value={input.commentary} onChange={e => setInput({ ...input, commentary: e.target.value })}></textarea>
          </div>
        </div>
        <button class="btn btn-primary pull-right">Submit</button>
      </div>
    </form>
  </div>
  </div>
        {/* <div className="container">
            <div class="row justify-content-center">
                <div class="col-6">
                    <div class="mb-3  d-flex justify-content-end flex-wrap" >
                        <h2>Comentarios</h2>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{marginBottom:20}}></textarea>
                        <button class="btn btn-primary">Agregar Comentario</button>
                    </div>
                </div>
            </div>
        </div>fin del div className="container" */}
    </>
    )
}