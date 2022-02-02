import axios from "axios";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_CATEGORY = "GET_CATEGORY"
export const ADD_PRODUCT = "ADD_PRODUCT"
export const EDIT_PRODUCT = "EDIT_PRODUCT"
export const ADD_CATEGORY = "ADD_CATEGORY"
export const EDIT_CATEGORY = "EDIT_CATEGORY"
export const DELETE_CATEGORY = "DELETE_CATEGORY"




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
            await axios.put(`/admin/edit/${id}`, body);
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
            var addCategory = await axios.post("/category/create", body);
            return addCategory;
        } catch (err) {
            console.log(err);
        }
    }
}

export function editCategory(id, body){
    return async (dispatch)=>{
        try {
            await axios.put(`/category/edit/${id}`, body);
            var allCategory=await axios.get("/category");
            return dispatch({
                type: EDIT_CATEGORY,
                payload: allCategory.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export function deleteCategory (name) {
    return async(dispatch)=>{
        try {
            await axios.delete(`/category/delete/?name=${name}`);
            var allCategory=await axios.get("/category");
            return dispatch({
                type: DELETE_CATEGORY, 
                payload: allCategory.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}