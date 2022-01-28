import axios from "axios";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_CATEGORY = "GET_CATEGORY"
export const ADD_PRODUCT = "ADD_PRODUCT"


export function deleteProduct (id) {
    return async(dispatch)=>{
        try {
            console.log("id que llega al action", id)
            let removeProduct=await axios.delete(`http://localhost:3001/admin/delete/${id}`);
            console.log('QUE ES ESTO',id)
            

        } catch (err) {
            console.log(err)
        }
    }
}


export function getCategory () {
    return async(dispatch)=>{
        try {
            var allCategory=await axios.get("http://localhost:3001/category");
              return dispatch({
                type: "GET_CATEGORY",
                payload: allCategory.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}


export function addProduct(body){
    return async (dispatch)=>{
        try {
            var addproduct = await axios.post('http://localhost:3001/admin/create', body);
            console.log("producto agregado", addproduct)
        } catch (err) {
            console.log(err);
        }
    }
}


export function editProduct(id, body){
    return async (dispatch)=>{
        try {
            var editproduct = await axios.put(`http://localhost:3001/admin/edit/${id}`, body);
            console.log("producto modificado", editproduct)
        } catch (err) {
            console.log(err);
        }
    }
}

export function addCategory(body){
    return async (dispatch)=>{
        try {
            var addCategory = await axios.post("", body);
            console.log("Categoria agregada", addCategory)
        } catch (err) {
            console.log(err);
        }
    }
}