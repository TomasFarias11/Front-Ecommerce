import axios from "axios";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_CATEGORY = "GET_CATEGORY"
export const ADD_PRODUCT = "ADD_PRODUCT"
export const EDIT_PRODUCT = "EDIT_PRODUCT"
export const GET_USERS = "GET_USERS"
export const DELETE_USER = "DELETE_USER"



export function deleteProduct (id) {
    return async(dispatch)=>{
        try {
            console.log("id que llega al action", id)
            await axios.delete(`/admin/delete/${id}`);
            return dispatch({
                type: DELETE_PRODUCT, 
                payload: id
            })
            let removeProduct=await axios.delete(`/admin/delete/${id}`);
            console.log('QUE ES ESTO',id)
            

        } catch (err) {
            console.log(err)
        }
    }
}


export function getCategory () {
    return async(dispatch)=>{
        try {
            var allCategory=await axios.get("/category");

              return dispatch({
                type: GET_CATEGORY,
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
            console.log("lo que me llega al actions", body)
            var addproduct = await axios.post('/admin/create', body);
            return addproduct;
        } catch (err) {
            console.log(err);
        }
    }
}


export function editProduct(id, body){
    return async (dispatch)=>{
        try {
            var editproduct = await axios.put(`/admin/edit/${id}`, body);
            return dispatch({
                type: EDIT_PRODUCT,
            })
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

export function getUsers(){
    return async (dispatch)=>{
        try {
            const allUsers=await axios.get("/user");
            return dispatch({
                type: GET_USERS,
                payload: allUsers.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export function deleteUser(id){
    return async (dispatch)=>{
        try {
            const deleteUser=await axios.delete(`/admin/user/delete/${id}`);
            return dispatch({
                type: DELETE_USER,
                payload: deleteUser.data.id
            })
        } catch (err) {
            console.log(err);
        }
    }
}